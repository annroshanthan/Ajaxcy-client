import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Brand } from 'src/app/models/brand.model';
import { BrandService } from 'src/app/services/brand.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-brand',
  templateUrl: './admin-brand.component.html',
  styleUrls: ['./admin-brand.component.scss']
})
export class AdminBrandComponent implements OnInit {
  @ViewChild("closed", { static: true }) closed!: ElementRef<any>;

  brandForm!: FormGroup
  isEdit: boolean = false;
  id: any;
  brands: Brand[] = [];
  constructor(
    private _brandService: BrandService,
    private _ngxService: NgxUiLoaderService
  ) { }

  ngOnInit(): void {
   
    this.getCategory();
    this.brandForm = new FormGroup({
      name: new FormControl('', Validators.required)
    });
  }

  getCategory() {
    this._ngxService.start();
    this._brandService.getBrand().subscribe({
      next: (res: Brand[]) => {
        this.brands = res;
        this._ngxService.stop();
      },
      error: (err: HttpErrorResponse) => {
        console.error(err);
        // this._ngxService.stop();
      }
    })
  }

  get f(): { [key: string]: AbstractControl } {
    return this.brandForm.controls;
  }

  onSubmit() {
    if (this.brandForm.invalid) {
      return;
    }

    if (this.isEdit) {
      this._brandService.updateBrand(this.id, this.brandForm.value).subscribe({
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
      this._brandService.addBrand(this.brandForm.value)
        .subscribe({
          next: (res: Brand) => {
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
    this.brandForm.reset();
    this.isEdit = false;
  }
  edit(id:any) {
    this.brands.forEach((element:any)=>{
      if(element._id == id){
        this.isEdit = true;
        this.id = id;
        this.brandForm.controls['name'].setValue(element.name);
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
        this._brandService.deleteBrand(id).subscribe({
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
