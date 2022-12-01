import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy {
  cartCount: number = 0;
  products: Array<any> = [];
  endSub$: Subject<any> = new Subject();
  quantity: number = 1;
  total = 0;
  subtotal: number = 0;
  constructor(
    private _cartService: CartService,
    private _productService: ProductService,
    private ngxService: NgxUiLoaderService,
    private router:Router
  ) { }

  deliveryform = new FormGroup({
    deliveryMethod: new FormControl('office', Validators.required)
  });

  ngOnInit(): void {
    this._cartService.cart$.subscribe(cart => {
      this.cartCount = cart?.items.length ?? 0;
    })
    this.cartDetails();
  }

  ngOnDestroy() {
    this.endSub$.next('');
    this.endSub$.complete();
  }

  private cartDetails() {
    this.ngxService.start();
    this._cartService.cart$.pipe(takeUntil(this.endSub$)).subscribe((rescart: any) => {
      this.products = [];

      rescart.items.forEach((element: any) => {
        this._productService.getproductById(element.productId, 'product').subscribe({
          next: (res:any) => {
            // * Number(res.quantity)
            this.total += ((res.topPrice - (res.topPrice)*res.discount/100) * Number(element.quantity))
            this.products.push({
              product: res,
              quantity: element.quantity
            })
           
          
          },
          error: (err) => console.log(err),
        })
      });
      this.ngxService.stop();
    })
    // this.getTotal()   
  }

  stepDown() {
    this.quantity -= 1
  }

  getTotal(){
    console.log('wowowo');
    console.log(this.products);
    
    // this.total += ((res.topPrice - (res.topPrice)*res.discount/100) * Number(element.quantity))
    this.products.map(element=>{
      console.log(element);
      
    })
    for (let product of this.products) {
      console.log(product);
      
    }
  }

  updateCartQuantity(event: any, cartItem: any) {
    this._cartService.setQuantityLocal({
      productId: cartItem.product._id,
      quantity: event

    });
  }

  deleteProduct(id: any) {
    this._cartService.deleteCartItems(id)
  }

  deliveryformsubmit(){
    if(this.deliveryform.value.deliveryMethod === 'office'){
        this.router.navigate(['/products/checkout'])
    }
    // console.log(this.deliveryform.value);
    
  }

}
