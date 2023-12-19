import { Component, OnInit } from '@angular/core';
import {APIService} from '../api.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  
  show:any;
  isAdmin:boolean=false;
  constructor(private api:APIService) { 
    
  }

  ngOnInit(): void {
    
    this.api.GetDataFromServer().subscribe(x=>{
      this.show=x;
      this.isAdmin = x.trending;
    })
    
    setTimeout(()=>{this.isAdmin = false;},5000);
  }

  

}
