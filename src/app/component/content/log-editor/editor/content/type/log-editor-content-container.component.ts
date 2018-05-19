import {Component, EventEmitter, Input, Output} from '@angular/core';
import {LogModel} from '../../../../../../service/core/file/model/extra/data/log/log-model';
import {LogContent} from '../../../../../../service/core/file/model/extra/data/log/extra/log-data/log-content';

@Component({
  selector: 'app-log-editor-content-container',
  templateUrl: './log-editor-content-container.component.html',
  styleUrls: ['./log-editor-content-container.component.css']
})
export class LogEditorContentContainerComponent {
  @Output() deleteThisLogContent = new EventEmitter<number>();
  @Input() index: number;
  @Input() logContent: LogContent;
  @Input() logModel: LogModel;

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

  onDeleteThisLogContent() {
    this.updateLogContentTileDisplayIndex();
    this.deleteThisLogContent.emit(this.index);
  }

  updateLogContentTileDisplayIndex() {
    const tileDisplayIndex = this.logModel.logDisplayOverride.tile.logContentToDisplayIndex;
    if (tileDisplayIndex !== undefined) {
      if (tileDisplayIndex === this.index) {
        this.logModel.logDisplayOverride.tile.logContentToDisplayIndex = undefined;
      } else if (tileDisplayIndex > this.index) {
        this.logModel.logDisplayOverride.tile.logContentToDisplayIndex--;
      } // else no need to update logContentToDisplayIndex
    }
  }

  onChangeThisLogContentAsTileDisplay(event: Event) {
    const checked = (<HTMLInputElement>event.srcElement).checked;
    if (checked) {
      this.logModel.logDisplayOverride.tile.logContentToDisplayIndex = this.index;
    } else {
      this.logModel.logDisplayOverride.tile.logContentToDisplayIndex = undefined;
    }
  }
}
