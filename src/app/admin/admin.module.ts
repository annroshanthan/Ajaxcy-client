import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminFooterComponent } from './admin-footer/admin-footer.component';
import { AdminproductComponent } from './adminproduct/adminproduct.component';
import { OauthGuard } from '../guards/oauth.guard';
import { AdminSideNavComponent } from './admin-side-nav/admin-side-nav.component';
import { AdminHomePageComponent } from './admin-dashboard/admin-home-page/admin-home-page.component';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { AdminSuperMarketComponent } from './admin-dashboard/admin-super-market/admin-super-market.component';
import { AdminCategoryComponent } from './admin-dashboard/admin-category/admin-category.component';
import { AdminBrandComponent } from './admin-dashboard/admin-brand/admin-brand.component';
import { AdminOrdersComponent } from './admin-dashboard/admin-orders/admin-orders.component';
import { ReactiveFormsModule } from '@angular/forms';
// import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    AdminDashboardComponent,
    AdminHeaderComponent,
    AdminFooterComponent,
    AdminproductComponent,
    AdminSideNavComponent,
    AdminHomePageComponent,
    AdminSuperMarketComponent,
    AdminCategoryComponent,
    AdminBrandComponent,
    AdminOrdersComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NgxUiLoaderModule,
    ReactiveFormsModule
    // ModalModule
    
  ],
  providers: [OauthGuard],
})
export class AdminModule { }
