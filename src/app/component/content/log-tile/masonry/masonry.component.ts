import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {LogModel} from '../../../../service/core/log/model/log-model';
import {EventBrokerService} from '../../../../service/event-broker-shared-service/event-broker-service';
import {BrokerEvent} from '../../../../service/event-broker-shared-service/broker-event';

declare var Masonry: any;

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
  @ViewChild('bottom') bottom: any;

  constructor(private _eventBroker: EventBrokerService) {
  }

  _masonry: any = null;
  logModels: LogModel[];
  moreLogsExist: boolean;

  ngOnInit() {
    this.logModels = [];
    this.moreLogsExist = true;
    this._masonry = null;
    this._eventBroker.listen<boolean>(String(BrokerEvent.NAVIGATION_SIDE_LEFT_STATE_CHANGED), (data: boolean) => {
      this.layout();
    });
    this._eventBroker.listen(String(BrokerEvent.CONTENT_SCROLLED), (data: boolean) => {
      if (this.moreLogsExist) {
        if (this.elementInViewport(this.bottom.nativeElement)) {
          this.callForMore();
        }
      }
    });
  }

  layout() {
    if (this._masonry !== null) {
      this._masonry.layout();
    }
  }

  generateMasonry() {
    setTimeout(() => {

      const grid = document.querySelector('.masonry');
      const masonry = new Masonry(grid, {
        itemSelector: '.masonry-item',
        columnWidth: '.masonry-item-sizer',
        percentPosition: true,
        gutter: 6,
      });
      this.onNgMasonryInit(masonry);

      if (this.elementInViewport(this.bottom.nativeElement)) {
        this.callForMore();
      }

      // masonry.on('layoutComplete', () => {
      //   console.log('layout is completed');
      // });
    }, 5);
  }

  onNgMasonryInit(masonry: any) {
    this._masonry = masonry;
  }

  elementInViewport(el) {
    const viewportOffset = el.getBoundingClientRect();
    const top = viewportOffset.top;
    return top <= window.innerHeight;
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

  callForMore() {
    if (this.moreLogsExist) {
      this.getMoreLogs.emit(true);
    }
  }

  appendItems(logModels: LogModel[]) {
    this.logModels = this.logModels.concat(logModels);
    this.generateMasonry();
  }
}
