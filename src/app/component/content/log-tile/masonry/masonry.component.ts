import {Component, EventEmitter, HostListener, Input, OnInit, Output, ViewChild} from '@angular/core';
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

  _masonry: any = null;
  logModels: LogModel[];
  moreLogsExist: boolean;

  constructor(private _eventBroker: EventBrokerService) {
    this._masonry = null;
    this._eventBroker.listen<boolean>(String(BrokerEvent.NAVIGATION_SIDE_LEFT_STATE_CLOSED), (data: boolean) => {
      this.viewportResize();
    });
    this._eventBroker.listen<boolean>(String(BrokerEvent.NAVIGATION_SIDE_LEFT_STATE_OPENED), (data: boolean) => {
      this.viewportResize();
    });
    this._eventBroker.listen(String(BrokerEvent.CONTENT_SCROLLED), (data: boolean) => {
      this.loadModelsIfEmptySpace();
    });
  }

  private viewportResize() {
    if (this._masonry !== null) {
      this._masonry.layout();

      setTimeout(() => {
        this.loadModelsIfEmptySpace();
      }, 500); // wait for layoutComplete
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    // // masonry auto call layout, so no need to call viewportResize
    setTimeout(() => {
      this.loadModelsIfEmptySpace();
    }, 500); // wait for masonry layoutComplete
  }

  ngOnInit() {
    this.initialize();
  }

  /**
   * also called from ArchiveComponent :/
   */
  initialize() {
    this.logModels = [];
    this.moreLogsExist = true;
  }

  /**
   * checks if more logs exist if so check if there is space in viewport
   */
  loadModelsIfEmptySpace() {
    if (this.moreLogsExist) {
      if (this.isElementInViewport(this.bottom.nativeElement)) {
        this.getMoreLogs.emit(true);
      }
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
      this._masonry = masonry;
      this.loadModelsIfEmptySpace();
    }, 5); // delay for dom update
  }

  isElementInViewport(el) {
    const viewportOffset = el.getBoundingClientRect();
    const top = viewportOffset.top;
    return top <= window.innerHeight;
  }

  getLogModels() {
    this._logModelsObservable.subscribe(logModels => {
      if (logModels.length === 0) {
        this.moreLogsExist = false;
      } else {
        this.logModels = this.logModels.concat(logModels);
        this.generateMasonry();
      }
    });
  }
}
