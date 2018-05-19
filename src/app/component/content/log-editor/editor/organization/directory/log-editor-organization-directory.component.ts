import {Component, Input, OnInit} from '@angular/core';
import {LogModel} from '../../../../../../service/core/file/model/extra/data/log/log-model';

@Component({
  selector: 'app-log-editor-organization-directory',
  templateUrl: './log-editor-organization-directory.component.html',
  styleUrls: ['./log-editor-organization-directory.component.css']
})
export class LogEditorOrganizationDirectoryComponent implements OnInit {
  @Input() logModel: LogModel;

  showSelector: boolean;

  ngOnInit() {
    this.showSelector = false;
    if (this.logModel.logOrganization.parentLogIDs === undefined) {
      this.logModel.logOrganization.parentLogIDs = [];
    }
    if (this.logModel.parentLogModels === undefined) {
      this.logModel.parentLogModels = [];
    }
  }

  toggleDirectorySelector() {
    this.showSelector = !this.showSelector;
  }

  closeDirectorySelector() {
    this.showSelector = false;
  }

  addSelectedParentLogModel(parentLogModel: LogModel) {
    if (!this.logModel.logOrganization.parentLogIDs.includes(parentLogModel.id)) {
      this.logModel.parentLogModels.push(parentLogModel);
      this.logModel.logOrganization.parentLogIDs.push(parentLogModel.id);
    }
  }

  onParentLogModelUnSelect(index: number) {
    this.logModel.parentLogModels.splice(index, 1);
    this.logModel.logOrganization.parentLogIDs = Array.from(this.logModel.parentLogModels, (logModel: LogModel) => logModel.id);
  }
}
