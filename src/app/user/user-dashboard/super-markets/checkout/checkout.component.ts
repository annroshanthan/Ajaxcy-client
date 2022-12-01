import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { CheckoutService } from 'src/app/services/checkout.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  orderItems: any;

  constructor(
    private _cartService:CartService,
    private _checkoutService:CheckoutService
  ) { }

  ngOnInit(): void {
    this.getCartItems();
    this.createSession();
  }

  private getCartItems() {
    const cart = this._cartService.getCart();
    this.orderItems = cart.items.map((item:any)=>{
      return{
        productId:item.productId,
        quantity:item.quantity
      }
    })
    console.log('OrderItems',this.orderItems);
  }

   createSession(){

    
    this._checkoutService.createSessionId(this.orderItems).subscribe( error =>{
     
            console.log('errpr',error);
         
    }
      // next: (error:any) => {
      //   if (error) {
      //     // this._stripeService.redirectToCheckout(res.id)
      //     console.log('errpr',error);
      //   }
    
      // }
    )
  }

}
