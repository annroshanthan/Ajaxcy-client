import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OAuthRoutingModule } from './oauth-routing.module';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { OauthComponent } from './oauth.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '../components/layout/layout.module';
import { EmailVerificationComponent } from './email-verification/email-verification.component';
// import {MatFormFieldModule} from '@angular/material/form-field';
@NgModule({
  declarations: [
    SignUpComponent,
    SignInComponent,
    ForgotPasswordComponent,
    OauthComponent,
    EmailVerificationComponent,
  ],
  imports: [
    CommonModule,
    OAuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    // MatFormFieldModule
  ]
})
export class OAuthModule { }
