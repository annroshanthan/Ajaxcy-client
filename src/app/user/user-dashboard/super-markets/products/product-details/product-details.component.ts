import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';
import { OauthService } from 'src/app/services/oauth.service';
import { ProductService } from 'src/app/services/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  productId: any;
  productsDetail: any | null;

  constructor(
    private _productService: ProductService,
    private route:ActivatedRoute,
    private _cartService:CartService,
    private _authService:OauthService,
    private _router:Router,
    private ngxService: NgxUiLoaderService
  ) { 
    this.productId = this.route.snapshot.paramMap.get('id');
    _cartService.initialCart();
  }

  ngOnInit(): void {
    this.getProductdetail();

  }

  getProductdetail(){
    this.ngxService.start();
    this._productService.getproductById(this.productId,'product').subscribe({
      next:(res:Product[]) => {
         this.productsDetail = res
         console.log({productsDetail:res});    
         this.ngxService.stop();
       },
       error:(err) => console.log(err),
  })
}

addToCard(){
  let isloggedIn = this._authService.isLoggedin();
  if (isloggedIn) {
    const cartItem = {
      productId:this.productsDetail._id,
      quantity:1
  
    }
    this._cartService.setCartLocal(cartItem);
  } else {
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'Please login to Buy',
      showConfirmButton: false,
      timer: 1500
    })
    this._router.navigate(['user/signin'])
  }
  

}

}
