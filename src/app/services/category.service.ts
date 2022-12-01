import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
private URL = environment.URL
  constructor(
    private http:HttpClient
  ) { }

  getCategory():Observable<Category[]>{
    return this.http.get<Category[]>(`${this.URL}/category/category`)
  }

  addCategory(category:string):Observable<Category>{
    return this.http.post<Category>(`${this.URL}/category/category`,category)
  }

  deleteCategory(id:string):Observable<Category>{
    return this.http.delete<Category>(`${this.URL}/category/category/${id}`)
  }

  updateCategory(id:string, category:Category){
    return this.http.put<Category>(`${this.URL}/category/category/${id}`,category)
  }
}
