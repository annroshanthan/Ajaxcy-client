import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { OauthService } from 'src/app/services/oauth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signupForm!:FormGroup;
  submitted:Boolean = false;
  // signupForm = new FormGroup({
  //   email: new FormControl('',Validators.required),
  //   password: new FormControl(''),
  // });

  constructor(
    private _authService:OauthService,
    private fb:FormBuilder
  ) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      email :['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(8)]],
      confirmpassword:['',[Validators.required,Validators.minLength(1)]]
    })
  }
get Email(){
  return this.signupForm.get('email')!
}
  signUp(){
    console.log(this.signupForm.value);
    this.submitted = true;
    if (this.signupForm.invalid) return;
    
    this._authService.signUp(this.signupForm.value).subscribe(res =>{
      Swal.fire({
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      })
    },(error:HttpErrorResponse) =>{
        console.log(error);
       
    })
    console.log("Working");
    
  }
   get f( ) {
    console.log(this.signupForm.controls);
    
    return this.signupForm.controls;

  }
}
