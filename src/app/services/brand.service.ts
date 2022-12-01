import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Brand } from '../models/brand.model';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  private URL = environment.URL
  constructor(
    private http:HttpClient
  ) { }

  getBrand():Observable<Brand[]>{
    return this.http.get<Brand[]>(`${this.URL}/brand/brand`)
  }

  addBrand(brand:string):Observable<Brand>{
    return this.http.post<Brand>(`${this.URL}/brand/brand`,brand)
  }

  deleteBrand(id:string):Observable<Brand>{
    return this.http.delete<Brand>(`${this.URL}/brand/brand/${id}`)
  }

  updateBrand(id:string, brand:Brand){
    return this.http.put<Brand>(`${this.URL}/brand/brand/${id}`,brand)
  }
}
