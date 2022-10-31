import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { LayoutModule } from '../components/layout/layout.module';
import { SuperMarketsComponent } from './user-dashboard/super-markets/super-markets.component';
import { NgxUiLoaderModule, NgxUiLoaderConfig,SPINNER,POSITION,PB_DIRECTION } from 'ngx-ui-loader';
import { ProductsComponent } from './user-dashboard/super-markets/products/products.component';
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
    ProductsComponent
    
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    LayoutModule,
    NgxUiLoaderModule,
  ]
})
export class UserModule { }
