import {Component, EventEmitter, HostListener, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {LogModel} from '../../../../../../service/core/model/data/log/log-model';
import {LogGetterRequest} from '../../../../../../service/core/endpoint/log/log-getter-request';
import {LogModelService} from '../../../../../../service/core/endpoint/log/log-model.service';
import {Pageable} from '../../../../../../service/core/model/request/pageable';
import {Sort} from '../../../../../../service/core/model/request/sort';
import {SortOrder} from '../../../../../../service/core/model/request/sort-order';

@Component({
  selector: 'app-log-selector-column',
  templateUrl: './log-selector-column.component.html',
  styleUrls: ['./log-selector-column.component.css']
})
export class LogSelectorColumnComponent implements OnInit {

  @Input() showColumnToolbar: boolean;
  @Input() logLevel: number;
  @Input() parentLogModel: LogModel;
  @Output() logModelSelected = new EventEmitter<any>();
  @ViewChild('bottom') bottom: any;
  childLogModels: LogModel[];
  logModelsObservable: Observable<LogModel[]>;
  isEmpty: boolean;
  moreExist: boolean;

  @Input() logModelIDsToHide: string[];
  @Input() selectedLogModelID: string;

  @Input() set pathLogModels(pathLogModels: LogModel[]) {
    if (pathLogModels.length > (this.logLevel + 1)) {
      this.logPathID = pathLogModels[this.logLevel + 1].id;
    } else {
      this.logPathID = undefined;
    }
  }

  logPathID: string;

  getterRequest: LogGetterRequest;

  constructor(private logModelService: LogModelService) {
    this.showColumnToolbar = false;
    this.logModelsObservable = null;
    this.childLogModels = [];
    this.isEmpty = false;
    this.moreExist = true;
  }

  ngOnInit() {
    if (this.logModelIDsToHide == null) {
      this.logModelIDsToHide = [];
    }

    const getterRequest = new LogGetterRequest();
    getterRequest.parentLogID = this.parentLogModel.id;
    getterRequest.pageable = new Pageable(-1, 20);
    getterRequest.sorts = [new Sort('metadata.created', SortOrder.desc)];
    this.getterRequest = getterRequest;

    this.getFileModels();
    this.logModelsObservable.subscribe((logModels: LogModel[]) => {
      if (logModels.length === 0) {
        this.isEmpty = true;
      } else {
        this.loadModelsIfEmptySpace();
      }
    });
  }

  selectLogModel(index: number) {
    this.logModelSelected.emit([this.logLevel, this.childLogModels[index]]);
  }

  onScroll() {
    this.loadModelsIfEmptySpace();
  }

  /**
   * checks if more logs exist if so check if there is space in viewport
   */
  loadModelsIfEmptySpace() {
    if (this.moreExist) {
      if (this.isElementInViewport(this.bottom.nativeElement)) {
        this.getFileModels();
      }
    }
  }

  isElementInViewport(el) {
    const viewportOffset = el.getBoundingClientRect();
    const top = viewportOffset.top;
    return top <= window.innerHeight;
  }

  getFileModels() {
    this.getterRequest.pageable.page++;
    this.logModelsObservable = this.logModelService.theGetter(this.getterRequest);
    this.logModelsObservable.subscribe((logModels: LogModel[]) => {
      if (logModels.length === 0) {
        this.moreExist = false;
      } else {
        this.childLogModels = this.childLogModels.concat(logModels);
      }
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    // // masonry auto call layout, so no need to call viewportResize
    setTimeout(() => {
      this.loadModelsIfEmptySpace();
    }, 500); // wait for masonry layoutComplete
  }
}
