import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { OauthService } from '../services/oauth.service';

@Injectable({
  providedIn: 'root'
})
export class OauthGuard implements CanActivate {

  constructor(
    private _authService:OauthService,
    private _route:Router
  ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this._authService.isLoggedin()) {
      return true;
    } else {
      this._route.navigate(['/user/signin'])
      return false;
    }
  }
  
}
