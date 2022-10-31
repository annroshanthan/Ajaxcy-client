import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { OauthService } from '../services/oauth.service';

@Injectable({
  providedIn: 'root'
})
export class JwtTokenInterCeptorService implements HttpInterceptor{

  constructor(
    private injector:Injector
  ) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   let token = this.injector.get(OauthService)
   let tok = token.getToken()
    let tokenReq = req.clone({
      setHeaders:{
        Authorization: `Bearer ${tok}`
      }
    })
    return next.handle(tokenReq)
  }
}
