import {Component, Input, ViewChild} from '@angular/core';
import {of} from 'rxjs/observable/of';
import {Observable} from 'rxjs/Observable';
import {LogModel} from '../../../../../../../service/core/model/data/log/log-model';
import {MasonryComponent} from '../../../../../log-tile/masonry/masonry.component';

@Component({
  selector: 'app-log-content-child-logs-section',
  templateUrl: './log-content-child-logs-section.component.html',
  styleUrls: ['./log-content-child-logs-section.component.css']
})
export class LogContentChildLogsSectionComponent {
  @ViewChild(MasonryComponent) masonryComponent: MasonryComponent;

  @Input() set logModel(logModel: LogModel) {
    this.initialize(logModel);
  }

  displayChildLogs: boolean;
  logModelsObservable: Observable<LogModel[]>;

  constructor() {
    this.displayChildLogs = false;
  }

  initialize(logModel: LogModel) {
    // reset masonry
    if (!!this.masonryComponent) {
      this.masonryComponent.initialize();
    }

    if (!!logModel) {
      this.displayChildLogs = logModel.logOrganization.childLogIDs != null && logModel.logOrganization.childLogIDs.length > 0;
      if (this.displayChildLogs) {
        this.logModelsObservable = of(logModel.childLogModels);
      }
    } else {
      this.displayChildLogs = false;
    }
  }
}
