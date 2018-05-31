import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {LogModel} from '../../../../../../service/core/model/data/log/log-model';
import {LogSelectorComponent} from '../../../../../widget/core/log/selector/log-selector.component';

@Component({
  selector: 'app-log-editor-organization-directory',
  templateUrl: './log-editor-organization-directory.component.html',
  styleUrls: ['./log-editor-organization-directory.component.css']
})
export class LogEditorOrganizationDirectoryComponent implements OnInit {
  @Input() logModel: LogModel;
  @ViewChild(LogSelectorComponent) logSelectorComponent: LogSelectorComponent;
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

  selectedParentLogModel(parentLogModel: LogModel) {
    this.onParentLogModelUnSelect(0);
    if (!this.logModel.logOrganization.parentLogIDs.includes(parentLogModel.id)) {
      this.logModel.parentLogModels.push(parentLogModel);
      this.logModel.logOrganization.parentLogIDs.push(parentLogModel.id);
      this.logModel.ancestryLogModels = this.logSelectorComponent.getPathLogModels();
    }
  }

  onParentLogModelUnSelect(index: number) {
    this.logModel.parentLogModels.splice(index, 1);
    this.logModel.logOrganization.parentLogIDs = Array.from(this.logModel.parentLogModels, (logModel: LogModel) => logModel.id);
    this.logModel.ancestryLogModels.splice(0, this.logModel.ancestryLogModels.length);
  }
}
