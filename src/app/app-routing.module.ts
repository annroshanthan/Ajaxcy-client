import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthAdminGuard } from './guards/auth-admin.guard';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path:'',   
    // pathMatch:'full',
    loadChildren: () =>import('./user/user.module')
    .then(mod => mod.UserModule)
  },  
  {
    path:'admin',
    loadChildren: () =>import('./admin/admin.module')
    .then(mod => mod.AdminModule),
    canActivate:[AuthAdminGuard]

  },
    {
    path:'user',
    loadChildren: () =>import('./oauth/oauth.module')
    .then(mod => mod.OAuthModule)
  },
  {
    path: "**",
    component: NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
