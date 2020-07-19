import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.css']
})
export class Assignment3Component implements OnInit {
  isVisible = true;
  timeStamps = [];

  constructor() { }

  ngOnInit(): void {
  }

  onClick(event: Event) {
    //let date = Date.now();
    this.timeStamps.push(new Date());
  }

}
