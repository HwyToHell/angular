import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.css']
})
export class Assignment2Component implements OnInit {
  userName = "";
  nChar = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onInput (event: Event) {
    ++this.nChar;
  }

/*  onReset () {
    this.userName = "";
  }
*/
}
