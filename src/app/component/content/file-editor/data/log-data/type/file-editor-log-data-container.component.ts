import {Component, EventEmitter, Input, Output} from '@angular/core';
import {LogData} from '../../../../../../service/core/file/model/extra/data/log/extra/log-data/log-data';
import {LogFileData} from '../../../../../../service/core/file/model/extra/data/log/log-file-data';

@Component({
  selector: 'app-file-editor-log-data-container',
  templateUrl: './file-editor-log-data-container.component.html',
  styleUrls: ['./file-editor-log-data-container.component.css']
})
export class FileEditorLogDataContainerComponent {
  @Output() deleteThisLogData = new EventEmitter<number>();
  @Input() index: number;
  @Input() logData: LogData;
  @Input() data: LogFileData;

  collapse: boolean;
  displayNone: boolean;
  timeout: any;

  constructor() {
    this.collapse = true;
    this.displayNone = true;
  }

  // animate collapse then set css `display: none;` so sortable.js
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
    this.updateLogDataTileDisplayIndex();
    this.deleteThisLogData.emit(this.index);
  }

  updateLogDataTileDisplayIndex() {
    const tileDisplayIndex = this.data.logTypeOverride.tile.logDataToDisplayIndex;
    if (tileDisplayIndex !== undefined) {
      if (tileDisplayIndex === this.index) {
        this.data.logTypeOverride.tile.logDataToDisplayIndex = undefined;
      } else if (tileDisplayIndex > this.index) {
        this.data.logTypeOverride.tile.logDataToDisplayIndex--;
      } // else no need to update logDataToDisplayIndex
    }
  }

  onChangeThisLogDataAsTileDisplay(event: Event) {
    const checked = (<HTMLInputElement>event.srcElement).checked;
    if (checked) {
      this.data.logTypeOverride.tile.logDataToDisplayIndex = this.index;
    } else {
      this.data.logTypeOverride.tile.logDataToDisplayIndex = undefined;
    }
  }
}
