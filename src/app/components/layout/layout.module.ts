import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { UserFooterComponent } from './user-footer/user-footer.component';
import { UserHeaderComponent } from './user-header/user-header.component';


@NgModule({
  declarations: [
    UserFooterComponent,
    UserHeaderComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule
  ],
  exports:[
    UserFooterComponent,
    UserHeaderComponent
  ]
})
export class LayoutModule { }
