import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { SuperMarketService } from 'src/app/services/super-market.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  superMarketId!: string;
  //  id: any;
  // subscription!: Subscription

  constructor(
    private _superMarketService: SuperMarketService,
    private route:ActivatedRoute
  ) {
    // this.product_id = this.actRoute.snapshot.params['id'];
    // this.superMarketId = this.route.snapshot.paramMap.get('id');
   }

  ngOnInit(): void {
    // this.subscription = this._superMarketService.Id.subscribe((res:any) => {
    //   this.id = res
    //   console.log({res});
      
    // })

console.log(this.superMarketId);


  }


}
