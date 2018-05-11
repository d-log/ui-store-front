import {Component, EventEmitter, Input, Output} from '@angular/core';
import {LogData} from '../../../../../../service/core/file/model/extra/data/log/extra/log-data/log-data';

@Component({
  selector: 'app-file-create-log-data-container',
  templateUrl: './file-create-log-data-container.component.html',
  styleUrls: ['./file-create-log-data-container.component.css']
})
export class FileCreateLogDataContainerComponent {
  @Output() updateFileModel = new EventEmitter<boolean>();
  @Output() deleteThisLogData = new EventEmitter<number>();
  @Input() index: number;
  @Input() logData: LogData;

  collapse: boolean;

  constructor() {
    this.collapse = true;
  }

  toggle() {
    this.collapse = !this.collapse;
  }

  onUpdateFileModel() {
    this.updateFileModel.emit(true);
  }

  onDeleteThisLogData() {
    this.deleteThisLogData.emit(this.index);
  }
}
