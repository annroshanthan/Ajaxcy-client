import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OauthGuard } from '../guards/oauth.guard';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminHomePageComponent } from './admin-dashboard/admin-home-page/admin-home-page.component';
import { AdminproductComponent } from './adminproduct/adminproduct.component';

const routes: Routes = [
  {
    path:'',
    component:AdminDashboardComponent,
    // canActivate:[OauthGuard]
    children:[
      {
        path:'',
    component:AdminHomePageComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
