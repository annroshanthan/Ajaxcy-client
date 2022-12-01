import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { CartService } from 'src/app/services/cart.service';
import { CheckoutService } from 'src/app/services/checkout.service';
import { OauthService } from 'src/app/services/oauth.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  userId: any;
  Id: any;
  orderItems: any;
  orders: Array<any> =[];

  constructor(
    private _route: ActivatedRoute,
    private _authService: OauthService,
    private _checkoutService: CheckoutService,
    private _cartService: CartService,
    private ngxService:NgxUiLoaderService
  ) { }

  ngOnInit(): void {
    let token = this._authService.getToken();
    const tokenDecord = JSON.parse(atob(token!.split('.')[1]))
    this.userId = tokenDecord.id

    this._route.queryParams.subscribe((params: any) => {
      this.Id = params['id']
    })

    if (this.userId === this.Id) {
      const cart = this._cartService.getCart();
      this.orderItems = cart.items.map((item: any) => {
        return {
          productId: item.productId,
          quantity: item.quantity
        }
      })
      this._checkoutService.saveOrder(this.orderItems).subscribe((res: any) => {
        if (res) {
          alert("Sucess")
          localStorage.removeItem('cart')
        }
      })
    }
    this.getOrder();
  }

  getOrder(){
    this.ngxService.start();
    this._checkoutService.getOrder().subscribe({
      next: (res:any) => {
        this.orders = res
        console.log({ RES: res });
        this.ngxService.stop();
      },
      error: (err) => console.log(err)
    })
  }

}
