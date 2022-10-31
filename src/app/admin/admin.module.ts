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


@NgModule({
  declarations: [
    AdminDashboardComponent,
    AdminHeaderComponent,
    AdminFooterComponent,
    AdminproductComponent,
    AdminSideNavComponent,
    AdminHomePageComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NgxUiLoaderModule
  ],
  providers: [OauthGuard],
})
export class AdminModule { }
