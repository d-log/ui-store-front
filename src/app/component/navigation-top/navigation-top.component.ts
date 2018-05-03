import {Component, EventEmitter, Output} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navigation-top',
  templateUrl: './navigation-top.component.html',
  styleUrls: ['./navigation-top.component.css']
})
export class NavigationTopComponent {

  @Output() onToggleNavigationSideLeft = new EventEmitter<boolean>();

  constructor(private router: Router) {
  }

  home() {
    this.router.navigate(['home']);
  }

  archive() {
    this.router.navigate(['log-tile/archive']);
  }

  search() {
    alert('coming soon');
  }

  settings() {
    alert('coming soon');
  }

  toggle() {
    this.onToggleNavigationSideLeft.emit(true);
  }
}
