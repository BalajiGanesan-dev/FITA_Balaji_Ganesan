import { Component } from '@angular/core';
import { Directive } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DailyBasket';
  height=0;
  ngOnInit(){
    this.setHeight();
}
  setHeight(){
    this.height= window.innerHeight - (130);
  }
}
