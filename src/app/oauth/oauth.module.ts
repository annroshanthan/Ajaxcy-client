import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OAuthRoutingModule } from './oauth-routing.module';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { OauthComponent } from './oauth.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SignUpComponent,
    SignInComponent,
    ForgotPasswordComponent,
    OauthComponent,
  ],
  imports: [
    CommonModule,
    OAuthRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class OAuthModule { }
