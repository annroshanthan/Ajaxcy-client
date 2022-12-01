import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';
// import { BsModalRef, BsModalService } from "ngx-bootstrap/modal";

@Component({
  selector: 'app-admin-category',
  templateUrl: './admin-category.component.html',
  styleUrls: ['./admin-category.component.scss']
})
export class AdminCategoryComponent implements OnInit {
  @ViewChild("closed", { static: true }) closed!: ElementRef<any>;

  categories: Category[] = [];
  /**
   * Property 'categoryForm' has no initializer and is 
   * not definitely assigned in the constructor
   * 
   * It is because TypeScript 2.7 includes a strict 
   * class checking where all the properties should be 
   * initialized in the constructor. A workaround is to
   *  add the ! as a postfix to the variable name:
   */
  categoryForm!: FormGroup
  isEdit: boolean = false;
  id: any;

  constructor(
    private _categoryService: CategoryService,
    private _ngxService: NgxUiLoaderService
  ) { }


  ngOnInit(): void {
    this.getCategory();
    this.categoryForm = new FormGroup({
      name: new FormControl('', Validators.required)
    });
  }

  getCategory() {
    this._ngxService.start();
    this._categoryService.getCategory().subscribe({
      next: (res: Category[]) => {
        this.categories = res;
        this._ngxService.stop();
      },
      error: (err: HttpErrorResponse) => {
        console.error(err);
        // this._ngxService.stop();
      }
    })
  }

  get f(): { [key: string]: AbstractControl } {
    return this.categoryForm.controls;
  }

  onSubmit() {
    if (this.categoryForm.invalid) {
      return;
    }

    if (this.isEdit) {
      this._categoryService.updateCategory(this.id, this.categoryForm.value).subscribe({
        next: (res: any) => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Updated Successful',
            timer: 2000
          });
          this.closed.nativeElement.click();
          this.getCategory()
        },
        error: (err: HttpErrorResponse) => {
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: err.error.msg,
            timer: 2000
          })
        }
      })
    } else {
      this._categoryService.addCategory(this.categoryForm.value)
        .subscribe({
          next: (res: Category) => {
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Sucessfully Added',
              showConfirmButton: false,
              timer: 1500
            });
            this.closed.nativeElement.click();
            this.getCategory();
          },
          error: (err: HttpErrorResponse) => {
            Swal.fire({
              position: 'center',
              icon: 'error',
              title: err.error.msg,
              timer: 2000
            })
          }
        })
    }

  }
  close() {
    this.categoryForm.reset();
    this.isEdit = false;
  }
  edit(id:any) {
    this.categories.forEach((element:any)=>{
      if(element._id == id){
        this.isEdit = true;
        this.id = id;
        this.categoryForm.controls['name'].setValue(element.name);
      }
    })
  }

  delete(id: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't delete this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'delete'
    }).then((result) => {
      if (result.isConfirmed) {
        this._categoryService.deleteCategory(id).subscribe({
          next: (res: any) => {
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
            this.getCategory();
          },
          error: (err: HttpErrorResponse) => {
            Swal.fire({
              position: 'center',
              icon: 'error',
              title: err.error.msg,
              timer: 2000
            })
          }
        })

      }
    })
  }
}
