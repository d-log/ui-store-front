import { Injectable } from '@angular/core';
import {BrokeredEvent, IBrokeredEventBase, IEventListener} from './extra';

@Injectable()
export class EventBrokerService {
  _events: { [name: string]: IBrokeredEventBase };
  constructor() {
    this._events = {};
  }
  public register<T>(eventName: string ): BrokeredEvent<T> {
    let event = this._events[eventName];
    if ( typeof event === 'undefined' ) {
      event = this._events[eventName] = new BrokeredEvent<T>(eventName);
    }
    return event as BrokeredEvent<T>;
  }
  public listen<T>(eventName: string, next: (value: T) => void): IEventListener {
    return this.register<T>(eventName).listen(next);
  }
  public emit<T>(eventName: string, data: T): void {
    return this.register<T>(eventName).emit(data);
  }
}
