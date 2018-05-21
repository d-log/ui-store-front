import {Component, EventEmitter, Input, OnInit, Output, QueryList, ViewChildren} from '@angular/core';
import {LogModel} from '../../../../../service/core/model/data/log/log-model';
import {LogModelService} from '../../../../../service/core/endpoint/log/log-model.service';
import {OnLogModelDrop} from './on-log-model-drop';
import {LogSelectorColumnComponent} from './column/log-selector-column.component';

@Component({
  selector: 'app-log-selector',
  templateUrl: './log-selector.component.html',
  styleUrls: ['./log-selector.component.css']
})
export class LogSelectorComponent implements OnInit {
  @Input() logModelIDsToHide: string[];
  @Input() showColumnToolbar: boolean;
  pathLogModels: LogModel[];

  selectedLogModel: LogModel;

  @Output() logModelSelectedAgain = new EventEmitter<LogModel>();
  @Output() logModelSelectedOnce = new EventEmitter<LogModel>();
  @ViewChildren(LogSelectorColumnComponent) columns: QueryList<LogSelectorColumnComponent>;

  constructor(private logModelService: LogModelService) {
    this.showColumnToolbar = false;
    this.pathLogModels = [];
    this.selectedLogModel = new LogModel();
  }

  ngOnInit() {
    this.logModelService.getRoot().subscribe((rootLogModel: LogModel) => {
      this.pathLogModels = [rootLogModel];
    });
  }

  onSelectedFileModel(event: EventEmitter<any>) {
    const oldSelectedFileModel = this.selectedLogModel;
    this.selectedLogModel = event[1];
    if (oldSelectedFileModel !== undefined && this.selectedLogModel.id === oldSelectedFileModel.id) {
      this.logModelSelectedAgain.emit(this.selectedLogModel);
    } else {
      this.pathLogModels = this.pathLogModels.slice(0, event[0] + 1);
      this.pathLogModels.push(event[1]);
      this.logModelSelectedOnce.emit(this.selectedLogModel);
    }
  }

  onLogModelDropped(event: OnLogModelDrop) {
    this.logModelService.assignNewParent(event.id, event.parentID).subscribe((logModel: LogModel) => {
      this.columns.forEach((column: LogSelectorColumnComponent) => {
        column.ngOnInit();
      });
    });
  }
}
