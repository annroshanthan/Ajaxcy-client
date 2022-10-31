import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailVerificationComponent } from './email-verification/email-verification.component';
import { OauthComponent } from './oauth.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {
    path:'',
    component:OauthComponent
  },
  {
    path:'signup',
    component:SignUpComponent
  },
  {
    path:'signin',
    component:SignInComponent
  },
  {
    path:'activate/:id',
    component:EmailVerificationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OAuthRoutingModule { }
