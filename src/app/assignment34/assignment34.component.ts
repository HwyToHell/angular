import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment34',
  templateUrl: './assignment34.component.html',
  styleUrls: ['./assignment34.component.css']
})
export class Assignment34Component implements OnInit {
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
