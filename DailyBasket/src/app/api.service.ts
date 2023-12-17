import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Baby_Care, Beauty_Care, Daily_Needs, Home_Essentials, Kitchen_Essentials, Snacks } from './api.interface';

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
