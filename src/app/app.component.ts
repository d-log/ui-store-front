import {Component, HostListener} from '@angular/core';
import {EventBrokerService} from './service/event-broker-shared-service/event-broker-service';
import {BrokerEvent} from './service/event-broker-shared-service/broker-event';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  navigationSideLeftState: string;
  navigationSideLeftButtonState: string;

  constructor(private _eventBroker: EventBrokerService) {
    this.closeNavigationSideLeft();
  }

  closeNavigationSideLeft() {
    this.navigationSideLeftState = 'close';
    this.navigationSideLeftButtonState = '';
    this.broadcastNavigationSideLeftStateChanged();
  }

  openNavigationSideLeft() {
    this.navigationSideLeftState = '';
    this.navigationSideLeftButtonState = 'close';
    this.broadcastNavigationSideLeftStateChanged();
  }

  broadcastNavigationSideLeftStateChanged() {
    // wait until animation is done with buffer, then send event
    setTimeout(() => {
      this._eventBroker.emit<boolean>(String(BrokerEvent.NAVIGATION_SIDE_LEFT_STATE_CHANGED), true);
    }, 505);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event.target.innerWidth < 900) {
      if (this.navigationSideLeftState === '') {
        this.closeNavigationSideLeft();
      }
    } else {
      if (this.navigationSideLeftState === 'close') {
        this.openNavigationSideLeft();
      }
    }
  }
}
