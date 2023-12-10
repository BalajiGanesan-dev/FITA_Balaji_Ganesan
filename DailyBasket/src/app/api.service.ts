import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class APIService {
  
  // Dependency Injection
  constructor(private http:HttpClient) { 
    
  }
 
  GetDataFromServer(){
    console.log(this.http);
    
    return "data";
  }
}
