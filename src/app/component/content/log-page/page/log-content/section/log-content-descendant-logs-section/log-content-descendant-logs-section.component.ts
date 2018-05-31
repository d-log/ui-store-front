import {Component, Input, ViewChild} from '@angular/core';
import {LogModel} from '../../../../../../../service/core/model/data/log/log-model';
import {Pageable} from '../../../../../../../service/core/model/request/pageable';
import {Sort} from '../../../../../../../service/core/model/request/sort';
import {LogGetterRequest} from '../../../../../../../service/core/endpoint/log/log-getter-request';
import {LogDisplayType} from '../../../../../../../service/core/model/data/log/extra/log-display-type';
import {LogModelService} from '../../../../../../../service/core/endpoint/log/log-model.service';
import {SortOrder} from '../../../../../../../service/core/model/request/sort-order';
import {MasonryComponent} from '../../../../../log-tile/masonry/masonry.component';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-log-content-descendant-logs-section',
  templateUrl: './log-content-descendant-logs-section.component.html',
  styleUrls: ['./log-content-descendant-logs-section.component.css']
})
export class LogContentDescendantLogsSectionComponent {
  @Input() set logModel(logModel: LogModel) {
    this.initialize(logModel);
  }

  @ViewChild(MasonryComponent) masonryComponent: MasonryComponent;

  logModelsObservable: Observable<LogModel[]>;

  getterRequest: LogGetterRequest;
  moreFilesExist: boolean;
  isEmptyResponse: boolean;

  constructor(private logModelService: LogModelService) {
  }

  initialize(logModel: LogModel) {
    // reset masonry
    if (!!this.masonryComponent) {
      this.masonryComponent.initialize();
    }

    this.moreFilesExist = true;
    this.isEmptyResponse = false;
    this.getterRequest = this.generateGetterRequest(logModel);

    this.getMoreFiles();
    this.logModelsObservable.subscribe(logModels => {
      if (logModels.length === 0) {
        this.isEmptyResponse = true;
      }
    });
  }

  private generateGetterRequest(logModel: LogModel) {
    const getterRequest = new LogGetterRequest();
    getterRequest.createdBefore = new Date().getTime();
    getterRequest.pageable = new Pageable(-1, 10);
    getterRequest.sorts = [new Sort('metadata.created', SortOrder.desc)];
    getterRequest.logDisplayType = LogDisplayType.TILE;

    getterRequest.ancestryLogID = logModel.id;

    return getterRequest;
  }

  /**
   * called from MasonryComponent child
   */
  getMoreFiles() {
    this.getterRequest.pageable.page++;
    this.logModelsObservable = this.logModelService.theGetter(this.getterRequest);
  }
}
