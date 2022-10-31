import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class OauthService {
  public URL = environment.URL;

  constructor(
    private http: HttpClient,
    private _router: Router
  ) { }

  signIn(body: User) {
    return this.http.post(`${this.URL}/user/signin`, body)
  }

  signUp(body: User) {
    return this.http.post(`${this.URL}/user/signup`, body)
  }


  isLoggedin() {
    return !!localStorage.getItem('supermarket')
  }

  getToken() {
    return localStorage.getItem('supermarket')
  }

  LogedOut() {
    return this.http.get(`${this.URL}/user/signout`)
  }

  activateEmail(activateToken: any){ 
    console.log({activateToken});
    
    return this.http.post(`${this.URL}/user/activation`, activateToken)
  }

}
