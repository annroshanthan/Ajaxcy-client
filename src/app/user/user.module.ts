import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { LayoutModule } from '../components/layout/layout.module';
import { SuperMarketsComponent } from './user-dashboard/super-markets/super-markets.component';
import { NgxUiLoaderModule, NgxUiLoaderConfig,SPINNER,POSITION,PB_DIRECTION } from 'ngx-ui-loader';
import { ProductsComponent } from './user-dashboard/super-markets/products/products.component';
import { ProductDetailsComponent } from './user-dashboard/super-markets/products/product-details/product-details.component';
import { CartComponent } from './user-dashboard/super-markets/cart/cart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxStripeModule } from 'ngx-stripe';
import { CheckoutComponent } from './user-dashboard/super-markets/checkout/checkout.component';
import { CheckoutService } from '../services/checkout.service';
import { OrdersComponent } from './user-dashboard/super-markets/orders/orders.component';
import { NgxImageZoomModule } from 'ngx-image-zoom';
// const ngxUiLoaderConfig: NgxUiLoaderConfig = {
//   fgsColor: "red",
//   bgsPosition: POSITION.bottomCenter,
//   bgsSize: 40,
//   bgsType: SPINNER.threeStrings, // background spinner type
//   fgsType: SPINNER.threeStrings, // foreground spinner type
//   pbDirection: PB_DIRECTION.leftToRight, // progress bar direction
//   pbThickness: 1, // progress bar thickness
// };

@NgModule({
  declarations: [  
    UserDashboardComponent,
    SuperMarketsComponent,
    ProductsComponent,
    ProductDetailsComponent,
    CartComponent,
    CheckoutComponent,
    OrdersComponent
    
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    LayoutModule,
    NgxUiLoaderModule,
    FormsModule,
    ReactiveFormsModule,
    NgxStripeModule.forRoot('pk_test_51M2XOqGEjKvfQnqpoNdvO5lJhuRn2SBcA6ZPl9O0DBLHMPr48QDVtibYxoUKjVdQgDzdpzexnQchRsRgagSxv3Kr00sUsvlehD'),
    NgxImageZoomModule
  ],
  providers:[CheckoutService]
})
export class UserModule { }
