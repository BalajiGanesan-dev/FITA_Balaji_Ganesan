import { Directive, HostListener,ElementRef,AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appResizer]'
})
export class ResizerDirective {
  
  currentElement:any;
  constructor(el:ElementRef) { 
    this.currentElement = el;
  }

  @HostListener('window:resize',['$event']) sizeDailyBasket(){
    this.currentElement.nativeElement.style.height = ((window.innerHeight)-(100+100)) + "px";
  }
  ngOnInit(){
    this.sizeDailyBasket();
  }
}
