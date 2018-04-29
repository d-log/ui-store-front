import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  navigationSideLeftState: string;
  navigationSideLeftButtonState: string;

  constructor() {
    this.closeNavigationSideLeft();
  }

  closeNavigationSideLeft() {
    this.navigationSideLeftState = 'close';
    this.navigationSideLeftButtonState = '';
  }

  openNavigationSideLeft() {
    this.navigationSideLeftState = '';
    this.navigationSideLeftButtonState = 'close';
  }
}
