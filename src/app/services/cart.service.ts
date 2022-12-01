import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  CART: string = 'cart';
  cart$: BehaviorSubject<any> = new BehaviorSubject(this.getCart());
  constructor(
    private _router: Router
  ) { }

  initialCart() {
    const cart = this.getCart();
    console.log('carttt', cart);

    if (!cart.items) {
      const initialCart = {
        items: []
      }
      const initialCartJson = JSON.stringify(initialCart);
      localStorage.setItem(this.CART, initialCartJson)
    }


  }

  getCart() {
    const cartJsonString = localStorage.getItem(this.CART) || '{}';
    const cart = JSON.parse(cartJsonString);
    return cart;

    // const cart = JSON.parse(localStorage.getItem(this.CART) || '{}');
    // return cart;
  }

  setCartLocal(cartItem: any) {
    const cart = this.getCart();

    const cartItemExists = cart.items.find((item: any) => item.productId === cartItem.productId)

    if (cartItemExists) {
      cart.items.map((item: any) => {
        if (item.productId === cartItem.productId) {
          // item.quantity = item.quantity + cartItem.quantity;
          Swal.fire({
            title: 'This product already added to the card',
            // text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Go to cart',
            cancelButtonText: 'Add more product'
          }).then((result) => {
            if (result.isConfirmed) {
              this._router.navigate(['/products/cart'])
              // Swal.fire(
              //   'Deleted!',
              //   'Your file has been deleted.',
              //   'success'
              // )
            } else if (result.isDismissed) {
              console.log('result-2', result);

              this._router.navigate(['/'])
            }

          })
          // item.quantity = item.quantity + cartItem.quantity;
          return item;
        }
      })
    } else {
      cart.items.push(cartItem);
    }


    const CartJson = JSON.stringify(cart);
    localStorage.setItem(this.CART, CartJson)
    this.cart$.next(cart)
    return cart;
  }

  //Delete cart items
  deleteCartItems(productId: string) {
    const cart = this.getCart();
    const newCart = cart.items.filter((item: any) => item.productId != productId);
    cart.items = newCart;

    const CartJsonString = JSON.stringify(cart);
    localStorage.setItem(this.CART, CartJsonString)
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Deleted',
      showConfirmButton: false,
      timer: 1500
    })
    this.cart$.next(cart)
    return cart;
  }

  setQuantityLocal(cartItem: any) {
    const cart = this.getCart();
    const cartItemExists = cart.items.find((item: any) => item.productId === cartItem.productId)

    if (cartItemExists) {
      cart.items.map((item: any) => {
        if (item.productId === cartItem.productId) {
          item.quantity = cartItem.quantity;
          return item;
        }
      })
    }

    const CartJson = JSON.stringify(cart);
    localStorage.setItem(this.CART, CartJson)
    this.cart$.next(cart)
    return cart;
  }

}
