import {Component, Input, OnInit} from '@angular/core';
import {LogFileData} from '../../../../../service/core/file/model/extra/data/log/log-file-data';

@Component({
  selector: 'app-file-create-log-type-override',
  templateUrl: './file-editor-log-type-override.component.html',
  styleUrls: ['./file-editor-log-type-override.component.css']
})
export class FileEditorLogTypeOverrideComponent implements OnInit {
  @Input() data: LogFileData;

  isUndefinedLogDataToDisplayIndex: boolean;
  previousValue: number;

  ngOnInit() {
    this.data.logTypeOverride.tile.logDataToDisplayIndex === undefined ? this.isUndefinedLogDataToDisplayIndex = true : this.isUndefinedLogDataToDisplayIndex = false;
  }

  manuallyAssignToggle() {
    if (this.isUndefinedLogDataToDisplayIndex) {
      this.previousValue = this.data.logTypeOverride.tile.logDataToDisplayIndex;
      this.data.logTypeOverride.tile.logDataToDisplayIndex = undefined;
    } else {
      this.data.logTypeOverride.tile.logDataToDisplayIndex = this.previousValue;
    }
  }
}
