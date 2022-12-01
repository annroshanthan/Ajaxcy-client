import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  private URL = environment.URL
  constructor(
    private http:HttpClient
  ) { }

  uploadFile(file:any):Observable<any>{
    console.log({file});
    
    return this.http.post<any>(`${this.URL}/file/upload`,file)
  }
}
