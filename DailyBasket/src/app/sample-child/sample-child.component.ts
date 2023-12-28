import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sample-child',
  templateUrl: './sample-child.component.html',
  styleUrls: ['./sample-child.component.scss']
})
export class SampleChildComponent implements OnInit {
  @Input() recieveData:any;

  constructor() { }

  ngOnInit(): void {
    console.log("child comp");
    console.log(this.recieveData);
  }

}
