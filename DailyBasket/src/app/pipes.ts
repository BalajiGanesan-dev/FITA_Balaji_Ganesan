import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'Smiley',
})
export class Smiley implements PipeTransform {
  constructor() {}
  transform(value: any) {
    
    return value + ":-)";
  }
}