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
    // this.router.navigateByUrl('home');
    window.location.href = '/home';
  }

  search() {
    alert('coming soon');
  }
}
