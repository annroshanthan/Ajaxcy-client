import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HttpClientModule ,HTTP_INTERCEPTORS} from '@angular/common/http';
import { JwtTokenInterCeptorService } from './interceptor/jwt-token-inter-ceptor.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthAdminGuard } from './guards/auth-admin.guard';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:JwtTokenInterCeptorService,
      multi:true
    },
    AuthAdminGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
