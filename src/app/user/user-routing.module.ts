import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './user-dashboard/super-markets/cart/cart.component';
import { CheckoutComponent } from './user-dashboard/super-markets/checkout/checkout.component';
import { OrdersComponent } from './user-dashboard/super-markets/orders/orders.component';
import { ProductDetailsComponent } from './user-dashboard/super-markets/products/product-details/product-details.component';
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
        path:'products/cart',
        pathMatch:'full',  
        component:CartComponent,
      },
      {
        path:'products/checkout',
        pathMatch:'full',  
        component:CheckoutComponent,
      },
      {
        path:'products/order',
        pathMatch:'full',  
        component:OrdersComponent,
      },
      {
        path:'products/:id',  
        component:ProductsComponent,
      },
      {
        path:'products/:id/:id',  
        component:ProductDetailsComponent,
      },
     
    ]
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
