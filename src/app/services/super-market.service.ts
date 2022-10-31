import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Supermarket } from '../models/supermarket.model';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SuperMarketService {
  public URL = environment.URL;

  // public superMarketId:any = new BehaviorSubject('');
  // Id:any = this.superMarketId.asObservable()

  constructor(
    private http: HttpClient,
    private _router:Router
  ) { }

  // OnIdClick(id:any){
  //     this.superMarketId.next(id);
  //     this._router.navigate(['products'])
  // }
  /**
   * create(product): Observable<Product> {
      return this.httpClient.post<Product>(this.apiServer + '/products/', JSON.stringify(product), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
    }  
    getById(id): Observable<Product> {
      return this.httpClient.get<Product>(this.apiServer + '/products/' + id)
      .pipe(
        catchError(this.errorHandler)
      )
    }
  
    getAll(): Observable<Product[]> {
      return this.httpClient.get<Product[]>(this.apiServer + '/products/')
      .pipe(
        catchError(this.errorHandler)
      )
    }
  
    update(id, product): Observable<Product> {
      return this.httpClient.put<Product>(this.apiServer + '/products/' + id, JSON.stringify(product), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
    }
  
    delete(id){
      return this.httpClient.delete<Product>(this.apiServer + '/products/' + id, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
    }
    errorHandler(error) {
       let errorMessage = '';
       if(error.error instanceof ErrorEvent) {
         // Get client-side error
         errorMessage = error.error.message;
       } else {
         // Get server-side error
         errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
       }
       console.log(errorMessage);
       return throwError(errorMessage);
    }
   */
  getSuperMarket(): Observable<Supermarket[]> {
    return this.http.get<Supermarket[]>(`${this.URL}/supermarket/shop`)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  errorHandler(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
