import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {products} from './api.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class APIService {
  
  // Dependency Injection
  constructor(private http:HttpClient) { 
    
  }
 
  GetDataFromServer():Observable<products[]> {
    console.log("hit")
    return this.http.get<products[]>('http://localhost:3000/products');
  }
}
