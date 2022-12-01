import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  URL:any = environment.URL
  constructor(
    private http:HttpClient
  ) { }

  // Product
getproductById(id:any,status:string): Observable<Product[]> {
  return this.http.get<Product[]>(`${this.URL}/api/product/${id}/${status}`)
}
}
