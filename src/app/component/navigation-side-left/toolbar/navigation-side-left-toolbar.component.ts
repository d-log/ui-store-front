import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-navigation-side-left-toolbar',
  templateUrl: './navigation-side-left-toolbar.component.html',
  styleUrls: ['./navigation-side-left-toolbar.component.css']
})
export class NavigationSideLeftToolbarComponent {

  @Output() onCloseNavigationSideLeft = new EventEmitter<boolean>();

  closeNavigationSideLeft() {
    this.onCloseNavigationSideLeft.emit(true);
  }
}
