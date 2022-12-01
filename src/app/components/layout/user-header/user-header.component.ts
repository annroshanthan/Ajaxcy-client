import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OauthService } from 'src/app/services/oauth.service';
import { CartService } from 'src/app/services/cart.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.scss']
})
export class UserHeaderComponent implements OnInit {
isloggedIn:Boolean = false;
cartCount:number = 0;
  constructor(
    public _authService:OauthService,
    private _router:Router,
    private _cartService:CartService
  ) { }

  ngOnInit(): void {
   this._cartService.cart$.subscribe(cart =>{
    this.cartCount = cart?.items.length ?? 0;
    })
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
