import {Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';
import {Masonry} from 'ng-masonry-grid';
import {Observable} from 'rxjs/Observable';
import {LogModel} from '../../../../service/core/log/model/log-model';
import {EventBrokerService} from '../../../../service/event-broker-shared-service/event-broker-service';
import {BrokerEvent} from '../../../../service/event-broker-shared-service/broker-event';

@Component({
  selector: 'app-masonry',
  templateUrl: './masonry.component.html',
  styleUrls: ['./masonry.component.css']
})
export class MasonryComponent implements OnInit {
  @Input() set logModelsObservable(logModelsObservable: Observable<LogModel[]>) {
    this._logModelsObservable = logModelsObservable;
    this.getLogModels();
  }

  private _logModelsObservable: Observable<LogModel[]>;

  @Output() getMoreLogs = new EventEmitter<boolean>();

  constructor(private _eventBroker: EventBrokerService) {
    _eventBroker.listen<boolean>(String(BrokerEvent.NAVIGATION_SIDE_LEFT_STATE_CHANGED), (value: boolean) => {
      this._masonry.layout();
    });
  }

  _masonry: Masonry;
  logModels: LogModel[];
  moreLogsExist: boolean;

  ngOnInit() {
    this.logModels = [];
    this.moreLogsExist = true;
  }

  onNgMasonryInit($event: Masonry) {
    this._masonry = $event;
  }

  getLogModels() {
    this._logModelsObservable.subscribe(logModels => {
      if (logModels.length === 0) {
        this.moreLogsExist = false;
      } else {
        this.appendItems(logModels);
      }
    });
  }

  appendItems(logModels: LogModel[]) {
    if (this._masonry) { // Check if Masonry instance exists
      this._masonry.setAddStatus('append'); // set status to 'append'
      this.logModels = this.logModels.concat(logModels);
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if ((window.innerHeight + window.scrollY) >= document.body.clientHeight) {
      if (this.moreLogsExist) {
        this.getMoreLogs.emit(true);
      }
    }
  }
}
