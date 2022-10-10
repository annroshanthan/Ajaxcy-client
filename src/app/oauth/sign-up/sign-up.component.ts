import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { OauthService } from 'src/app/services/oauth.service';

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
      confirmpassword:['',[Validators.required,Validators.minLength(8)]]
    })
  }

  signUp(){
    console.log(this.signupForm.value);
    this.submitted = true;
    if (this.signupForm.invalid) {
      return;
    }
    console.log("Working");
    
  }

}
