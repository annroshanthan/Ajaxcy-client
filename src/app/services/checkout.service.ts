import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { switchMap } from 'rxjs/operators';
import { StripeService } from 'ngx-stripe';
@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  public URL = environment.URL;

  constructor(
    private http: HttpClient,
    private stripeService: StripeService
  ) { }

  createSessionId(orderItems: any) {
    return this.http.post(`${this.URL}/api/create-scripe-session`, orderItems)
      .pipe(
        switchMap((session: any) => {  
          return this.stripeService.redirectToCheckout({ sessionId: session.id })
        })
      )
  }

  saveOrder(orderItems:any,){
    return this.http.post(`${this.URL}/api/order`, orderItems)
  }

  getOrder(){
    return this.http.get(`${this.URL}/api/order`)
  }

}
