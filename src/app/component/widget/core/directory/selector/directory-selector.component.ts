import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {LogModel} from '../../../../../service/core/file/model/extra/data/log/log-model';
import {LogModelService} from '../../../../../service/core/file/type/log/log-model.service';

@Component({
  selector: 'app-directory-selector-column-container',
  templateUrl: './directory-selector.component.html',
  styleUrls: ['./directory-selector.component.css']
})
export class DirectorySelectorComponent implements OnInit {
  @Input() showColumnToolbar: boolean;
  pathLogModels: LogModel[];
  selectedLogModel: LogModel;
  selectedLogModelID: string;

  @Output() logModelSelectedAgain = new EventEmitter<LogModel>();
  @Output() logModelSelectedOnce = new EventEmitter<LogModel>();

  constructor(private logModelService: LogModelService) {
    this.showColumnToolbar = false;
    this.pathLogModels = [];
  }

  ngOnInit() {
    this.logModelService.getRoot().subscribe((rootLogModel: LogModel) => {
      this.pathLogModels = [rootLogModel];
    });
  }

  onSelectedFileModel(event: EventEmitter<any>) {
    const oldSelectedFileModel = this.selectedLogModel;
    this.setSelectedFileModel(event[1]);
    if (oldSelectedFileModel !== undefined && this.selectedLogModel.id === oldSelectedFileModel.id) {
      this.logModelSelectedAgain.emit(this.selectedLogModel);
    } else {
      this.pathLogModels = this.pathLogModels.slice(0, event[0] + 1);
      this.pathLogModels.push(event[1]);
      this.logModelSelectedOnce.emit(this.selectedLogModel);
    }
  }

  setSelectedFileModel(selectedModel: LogModel) {
    this.selectedLogModel = selectedModel;
    this.selectedLogModelID = selectedModel.id;
  }
}
