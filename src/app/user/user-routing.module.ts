import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './user-dashboard/super-markets/products/products.component';
import { SuperMarketsComponent } from './user-dashboard/super-markets/super-markets.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';

const routes: Routes = [
  {
    path:'',
    component:UserDashboardComponent,
    
    children:[
      {
        path:'',
        component:SuperMarketsComponent
      },
      {
        path:'products/:id',  
        component:ProductsComponent,
      }
    ]
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
