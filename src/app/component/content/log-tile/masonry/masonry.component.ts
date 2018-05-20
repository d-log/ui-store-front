import {Component, EventEmitter, HostListener, Input, Output, ViewChild} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {LogModel} from '../../../../service/core/file/model/extra/data/log/log-model';
import {EventBrokerService} from '../../../../service/event-broker-shared-service/event-broker-service';
import {BrokerEvent} from '../../../../service/event-broker-shared-service/broker-event';

declare var Masonry: any;

// declare var imagesLoaded: any;

@Component({
  selector: 'app-masonry',
  templateUrl: './masonry.component.html',
  styleUrls: ['./masonry.component.css']
})
export class MasonryComponent {
  @Input() showSpinner: boolean;

  @Input() set logModelsObservable(logModelsObservable: Observable<LogModel[]>) {
    this._logModelsObservable = logModelsObservable;
    this.getLogModels();
  }

  private _logModelsObservable: Observable<LogModel[]>;

  @Output() getMoreFiles = new EventEmitter<boolean>();
  @ViewChild('bottom') bottom: any;

  _masonry: any = null;
  logModels: LogModel[];
  moreExist: boolean;

  constructor(private _eventBroker: EventBrokerService) {
    this.showSpinner = true;
    this.initialize();
    this._masonry = null;
    this._eventBroker.listen<boolean>(String(BrokerEvent.NAVIGATION_SIDE_LEFT_STATE_CHANGED), (data: boolean) => {
      this.viewportResize();
    });
    this._eventBroker.listen(String(BrokerEvent.CONTENT_SCROLLED), (data: boolean) => {
      this.loadModelsIfEmptySpace();
    });
  }

  private viewportResize() {
    if (this._masonry !== null) {
      // wait for other resizing (font-size) to be complete
      setTimeout(() => {
        this._masonry.layout();

        // wait for layoutComplete
        setTimeout(() => {
          this.loadModelsIfEmptySpace();
        }, 250);
      }, 25);
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    // // masonry auto call layout, so no need to call viewportResize
    setTimeout(() => {
      this.loadModelsIfEmptySpace();
    }, 500); // wait for masonry layoutComplete
  }

  /**
   * also called from ArchiveComponent :/
   */
  initialize() {
    this.logModels = [];
    this.moreExist = true;
  }

  /**
   * checks if more logs exist if so check if there is space in viewport
   */
  loadModelsIfEmptySpace() {
    if (this.moreExist) {
      if (this.isElementInViewport(this.bottom.nativeElement)) {
        this.getMoreFiles.emit(true);
      }
    }
  }

  generateMasonry() {
    setTimeout(() => {
      const grid = document.querySelector('.masonry');

      // imagesLoaded(grid, () => {
      this._masonry = new Masonry(grid, {
        itemSelector: '.masonry-item',
        columnWidth: '.masonry-item-sizer',
        percentPosition: true,
        gutter: 12,
        // transitionDuration: 5
      });
      // setTimeout(() => {
      this.loadModelsIfEmptySpace();
      //   }, 1000); // wait imagesLoaded and layoutComplete
      // });
    }, 5); // delay for dom update
  }

  isElementInViewport(el) {
    const viewportOffset = el.getBoundingClientRect();
    const top = viewportOffset.top;
    return top <= window.innerHeight;
  }

  getLogModels() {
    this._logModelsObservable.subscribe(fileModels => {
      if (fileModels.length === 0) {
        this.moreExist = false;
      } else {
        this.logModels = this.logModels.concat(fileModels);
        this.generateMasonry();
      }
    });
  }
}
