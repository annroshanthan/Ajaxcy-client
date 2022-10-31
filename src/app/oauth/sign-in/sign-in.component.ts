import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OauthService } from 'src/app/services/oauth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  signinForm = new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required,Validators.minLength(8)])
  })

  constructor(
    private _authService:OauthService,
    private _router: Router
  ) { }

  ngOnInit(): void {
  }

  signIn() {
    if (this.signinForm.invalid) return;
    this._authService.signIn(this.signinForm.value)
      .subscribe((res:any) => {
        console.log({res});
        localStorage.setItem("supermarket",res.AccessToken)
        this._router.navigate(['/'])
      }, (error: HttpErrorResponse) => {
        if (error.status !== 400) {
          console.log("Error is in the server, try again later");
        } else {
          console.log(error);
        }

      })
  }
  get email() {
    return this.signinForm.get('email');
  }
  get password() {
    return this.signinForm.get('password');
  }
}
