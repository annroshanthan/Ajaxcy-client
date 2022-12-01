import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OauthGuard } from '../guards/oauth.guard';
import { SuperMarketsComponent } from '../user/user-dashboard/super-markets/super-markets.component';
import { AdminBrandComponent } from './admin-dashboard/admin-brand/admin-brand.component';
import { AdminCategoryComponent } from './admin-dashboard/admin-category/admin-category.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminHomePageComponent } from './admin-dashboard/admin-home-page/admin-home-page.component';
import { AdminSuperMarketComponent } from './admin-dashboard/admin-super-market/admin-super-market.component';
import { AdminproductComponent } from './adminproduct/adminproduct.component';

const routes: Routes = [
  {
    path: '',
    component: AdminDashboardComponent,
    // canActivate:[OauthGuard]
    children: [
      {
        path: '',
        component: AdminHomePageComponent,
      },
      {
        path: 'category',
        component: AdminCategoryComponent,
      },
      {
        path: 'brand',
        component: AdminBrandComponent,
      },
      {
        path: 'superMarket',
        component: AdminSuperMarketComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
