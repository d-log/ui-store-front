import {Component} from '@angular/core';
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

  toggleNavigationSideLeft() {
    if (this.navigationSideLeftState === 'close') {
      this.openNavigationSideLeft();
    } else {
      this.closeNavigationSideLeft();
    }
  }

  closeNavigationSideLeft() {
    this.navigationSideLeftState = 'close';
    this.navigationSideLeftButtonState = '';
    // wait until animation is done with buffer, then send event
    this.broadcastEvent(BrokerEvent.NAVIGATION_SIDE_LEFT_STATE_CLOSED, 505);
    this.broadcastEvent(BrokerEvent.NAVIGATION_SIDE_LEFT_STATE_CHANGED, 505);
  }

  openNavigationSideLeft() {
    this.navigationSideLeftState = '';
    this.navigationSideLeftButtonState = 'close';
    // wait until animation is done with buffer, then send event
    this.broadcastEvent(BrokerEvent.NAVIGATION_SIDE_LEFT_STATE_OPENED, 505);
    this.broadcastEvent(BrokerEvent.NAVIGATION_SIDE_LEFT_STATE_CHANGED, 505);
  }

  broadcastEvent(brokerEvent: BrokerEvent, millisecondDelay: number) {
    setTimeout(() => {
      this._eventBroker.emit<boolean>(String(brokerEvent), true);
    }, millisecondDelay);
  }

  onContentScroll(event) {
    this._eventBroker.emit<boolean>(String(BrokerEvent.CONTENT_SCROLLED), true);
  }
}
