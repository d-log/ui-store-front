import {AfterViewInit, Component, EventEmitter, HostListener, Input, Output} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {LogModel} from '../../../../service/core/model/data/log/log-model';
import {EventBrokerService} from '../../../../service/event-broker-shared-service/event-broker-service';
import {BrokerEvent} from '../../../../service/event-broker-shared-service/broker-event';

declare var Masonry: any;

// declare var imagesLoaded: any;

@Component({
  selector: 'app-masonry',
  templateUrl: './masonry.component.html',
  styleUrls: ['./masonry.component.css']
})
export class MasonryComponent implements AfterViewInit {
  @Input() showSpinner: boolean;

  @Input() set logModelsObservable(logModelsObservable: Observable<LogModel[]>) {
    this._logModelsObservable = logModelsObservable;
    this.getLogModels();
  }

  private _logModelsObservable: Observable<LogModel[]>;

  @Output() getMoreFiles = new EventEmitter<boolean>();

  bottom: any;
  _masonry: any = null;
  logModels: LogModel[];
  moreExist: boolean;
  uniqueID: string; // allows for multiple instances of MasonryComponent without colliding ids

  constructor(private _eventBroker: EventBrokerService) {
    this.bottom = null;
    this.uniqueID = this.guidGenerator();
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

  ngAfterViewInit() {
    this.bottom = document.getElementById('bottom-' + this.uniqueID);
  }

  private guidGenerator() {
    const S4 = function () {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return (S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4());
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
    // Even though layout() is called automatically "sometimes"
    // However it fails in one edge case:
    //  Layout is not called when masonry container is within a
    //  fixed width/max-width container and there are css media
    //  queries that modify the masonry-items width
    // So here we are calling it every time on window resize
    this._masonry.layout();

    // wait for masonry layoutComplete
    setTimeout(() => {
      this.loadModelsIfEmptySpace();
    }, 500);
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
      if (this.bottom != null) {
        if (this.isElementInViewport(this.bottom)) {
          this.getMoreFiles.emit(true);
        }
      }
    }
  }

  generateMasonry() {
    setTimeout(() => {
      const grid = document.getElementById(this.uniqueID);

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
