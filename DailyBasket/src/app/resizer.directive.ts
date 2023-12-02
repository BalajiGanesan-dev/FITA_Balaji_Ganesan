import { Directive } from '@angular/core';

@Directive({
  selector: '[appResizer]'
})
export class ResizerDirective {

  constructor() { 
    console.log(this);
  }

}
