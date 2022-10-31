import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Supermarket } from 'src/app/models/supermarket.model';
import { SuperMarketService } from 'src/app/services/super-market.service';

@Component({
  selector: 'app-super-markets',
  templateUrl: './super-markets.component.html',
  styleUrls: ['./super-markets.component.scss']
})
export class SuperMarketsComponent implements OnInit {
  supermarkets:Array<any> = [];
  constructor(
    private _SupermarketService:SuperMarketService,
    private ngxService: NgxUiLoaderService
  ) { }

  ngOnInit(): void {
    this.getSuperMarket()
  }

  sendId(id:any){
    console.log({ijojoj:id});
    // this._SupermarketService.OnIdClick(id)
    
  }

  getSuperMarket(){
    this.ngxService.start();
    this._SupermarketService.getSuperMarket()
    .subscribe((data:Supermarket[])=>{
      this.supermarkets = data;
      this.ngxService.stop();
    },(error:HttpErrorResponse)=>{
      console.log(error);     
    })  
  }

}
