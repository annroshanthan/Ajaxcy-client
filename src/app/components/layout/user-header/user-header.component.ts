import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OauthService } from 'src/app/services/oauth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.scss']
})
export class UserHeaderComponent implements OnInit {
isloggedIn:Boolean = false;
  constructor(
    public _authService:OauthService,
    private _router:Router
  ) { }

  ngOnInit(): void {
    // this.isloggedIn = this._authService.isLoggedin()
  }

  loggedOut(){
      localStorage.clear()
      this._authService.LogedOut().subscribe(
        res =>{
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Logged Out',
            showConfirmButton: false,
            timer: 1500
          })
        },
        err =>{
          console.log(err);
          
        }
      )
  }
}
