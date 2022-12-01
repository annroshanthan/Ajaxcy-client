import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product.model';
import { NgxUiLoaderService } from 'ngx-ui-loader';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  superMarketId: any;
  products: any;

  constructor(
    private _productService: ProductService,
    private route: ActivatedRoute,
    private ngxService: NgxUiLoaderService
  ) {
    this.superMarketId = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.getProductsById();
  }

  featuredProducts = [
    {
      name: "Apple",
      price: 200,
      image: 'https://cdn.pixabay.com/photo/2016/10/10/14/46/icon-1728552__480.jpg'
    }, {

      name: "Apple-2",
      price: 500,
      image: 'https://cdn.pixabay.com/photo/2014/04/02/10/53/shopping-cart-304843__480.png'
    }, {

      name: "Apple-3",
      price: 400,
      image: 'https://cdn.pixabay.com/photo/2015/12/08/10/39/online-shopping-1082728__480.jpg'
    }
  ]

  getProductsById() {
    this.ngxService.start();
    this._productService.getproductById(this.superMarketId, 'supermarket').subscribe({
      next: (res: Product[]) => {
        this.products = res
        console.log({ RES: res });
        this.ngxService.stop();
      },
      error: (err) => console.log(err),
      // complete:() => {
      //   console.log('Completed');        
      // } 
    })
  }

}
