import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private myAppUrl: string = environment.endpoint
  private myApiUrl: string = 'api/Category'
  
  constructor(private http: HttpClient) { 


  }


  getCategory(): Observable<any>{
    return this.http.get(`${this.myAppUrl}${this.myApiUrl}`);
  }
}
