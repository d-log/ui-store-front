import {Component, EventEmitter, Input, Output} from '@angular/core';
import {LogData} from '../../../../../../service/core/file/model/extra/data/log/extra/log-data/log-data';

@Component({
  selector: 'app-file-create-log-data-container',
  templateUrl: './file-create-log-data-container.component.html',
  styleUrls: ['./file-create-log-data-container.component.css']
})
export class FileCreateLogDataContainerComponent {
  @Output() deleteThisLogData = new EventEmitter<number>();
  @Input() index: number;
  @Input() logData: LogData;

  collapse: boolean;
  displayNone: boolean;
  timeout: any;

  displayCSS: boolean;

  constructor() {
    this.collapse = false;
    this.displayNone = false;
    this.displayCSS = false;
  }

  toggleDisplayCSS() {
    this.displayCSS = !this.displayCSS;
  }

  // animate collapse then set display to none so sortable.js
  // doesn't ghost animate elements below the selected element
  toggle() {
    if (this.collapse) {
      clearTimeout(this.timeout);
      this.displayNone = false;
      this.collapse = false;
    } else {
      this.collapse = true;
      this.timeout = setTimeout(() => {
        this.displayNone = true;
      }, 500);
    }
  }

  onDeleteThisLogData() {
    this.deleteThisLogData.emit(this.index);
  }
}
