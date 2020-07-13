import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
  styles: [`
    h1 {
      color: maroon;
    }
  `]
})
export class AppComponent {
  title = 'first-app';
}
