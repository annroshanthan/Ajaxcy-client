import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Supermarket } from 'src/app/models/supermarket.model';
import { FileUploadService } from 'src/app/services/file-upload.service';
import { SuperMarketService } from 'src/app/services/super-market.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-super-market',
  templateUrl: './admin-super-market.component.html',
  styleUrls: ['./admin-super-market.component.scss']
})
export class AdminSuperMarketComponent implements OnInit {
  @ViewChild("closed", { static: true }) closed!: ElementRef<any>;

  constructor(
    private _ngxService: NgxUiLoaderService,
    private _superMarketService: SuperMarketService,
    private _fileUploadService: FileUploadService,
    private fb: FormBuilder
  ) { }
  imageSrc!: string;
  SuperMarkets: Supermarket[] = [];
  isEdit: boolean = false;
  id: any;
  file!: any;

  superMarketForm = this.fb.group({
    name: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    quote: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    about: new FormControl('', Validators.required),
    file: new FormControl('', Validators.required),
  });

  ngOnInit(): void {
    this.getCategory();

  }

  getCategory() {
    this._ngxService.start();
    this._superMarketService.getSuperMarket().subscribe({
      next: (res: Supermarket[]) => {
        this.SuperMarkets = res;
        this._ngxService.stop();
      },
      error: (err: HttpErrorResponse) => {
        console.error(err);
        this._ngxService.stop();
      }
    })
  }

  get f(): { [key: string]: AbstractControl } {
    return this.superMarketForm.controls;
  }

  onSubmit() {
    if (this.superMarketForm.invalid) {
      return;
    }

    if (this.isEdit) {
      // console.log('formValue-4',this.superMarketForm.value);

      // this._fileUploadService.uploadFile().subscribe({
      //   next:(res:any) =>{

      //   },
      //   error:(err:HttpErrorResponse) =>{
      //     console.error(err);
      //   }
      // })
      //   this._superMarketService.updateCategory(this.id, this.categoryForm.value).subscribe({
      //     next: (res: any) => {
      //       Swal.fire({
      //         position: 'center',
      //         icon: 'success',
      //         title: 'Updated Successful',
      //         timer: 2000
      //       });
      //       this.closed.nativeElement.click();
      //       this.getCategory()
      //     },
      //     error: (err: HttpErrorResponse) => {
      //       Swal.fire({
      //         position: 'center',
      //         icon: 'error',
      //         title: err.error.msg,
      //         timer: 2000
      //       })
      //     }
      //   })
    } else {
      this._fileUploadService.uploadFile(this.file).subscribe({
        next: (res: any) => {
          if (res == null) return;

          this._superMarketService.addSuperMarket({ images: res, ...this.superMarketForm.value })
            .subscribe({
              next: (res: Supermarket) => {
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
        },
        error: (err: HttpErrorResponse) => {
          console.error(err);
        }
      })

    }

  }
  close() {
    this.superMarketForm.reset();
    this.isEdit = false;
  }

  //Image section start
  onFileChange(event: any) {
    console.log({ event });

    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {

      const [file] = event.target.files;
      reader.readAsDataURL(file);

      reader.onload = () => {
        let files = event.target.files[0];
        if (files.type !== 'image/jpeg' && files.type !== 'image/png') {
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Incorrect Format',
            timer: 2000
          })
          return;
        }

        this.imageSrc = reader.result as string;

        this.file = new FormData();
        this.file.append('file', files)
      };

    }

  }
  //Image section end

  // edit(id:any) {
  //   this.SuperMarkets.forEach((element:any)=>{
  //     if(element._id == id){
  //       this.isEdit = true;
  //       this.id = id;
  //       this.superMarketForm.controls['name'].setValue(element.name);
  //     }
  //   })
  // }

  // delete(id: any) {
  //   Swal.fire({
  //     title: 'Are you sure?',
  //     text: "You won't delete this!",
  //     icon: 'warning',
  //     showCancelButton: true,
  //     confirmButtonColor: '#3085d6',
  //     cancelButtonColor: '#d33',
  //     confirmButtonText: 'delete'
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       this._superMarketService.deleteCategory(id).subscribe({
  //         next: (res: any) => {
  //           Swal.fire(
  //             'Deleted!',
  //             'Your file has been deleted.',
  //             'success'
  //           )
  //           this.getCategory();
  //         },
  //         error: (err: HttpErrorResponse) => {
  //           Swal.fire({
  //             position: 'center',
  //             icon: 'error',
  //             title: err.error.msg,
  //             timer: 2000
  //           })
  //         }
  //       })

  //     }
  //   })
  // }
}
