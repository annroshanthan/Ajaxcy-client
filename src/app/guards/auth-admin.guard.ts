import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { OauthService } from '../services/oauth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthAdminGuard implements CanActivate {
  
  constructor(
    private _authService:OauthService,
    private _route:Router
    ){}    
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
      if (this._authService.isLoggedin()) {
        let token = this._authService.getToken();
        const tokenDecord = JSON.parse(atob(token!.split('.')[1]))
        
        if(tokenDecord.isAdmin)
        return true;
        this._route.navigate(['/']);
        return false;
      } else {
        this._route.navigate(['/user/signin']);
        return false;
      }

  }
  
}
