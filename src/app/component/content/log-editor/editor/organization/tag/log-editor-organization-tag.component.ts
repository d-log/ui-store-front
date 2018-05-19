import {Component, Input, OnInit} from '@angular/core';
import {LogModel} from '../../../../../../service/core/file/model/extra/data/log/log-model';
import {TagModel} from '../../../../../../service/core/file/model/extra/data/tag/tag-model';

@Component({
  selector: 'app-log-editor-organization-tag',
  templateUrl: './log-editor-organization-tag.component.html',
  styleUrls: ['./log-editor-organization-tag.component.css']
})
export class LogEditorOrganizationTagComponent implements OnInit {
  @Input() logModel: LogModel;

  showTagSelector: boolean;

  ngOnInit() {
    if (this.logModel.logOrganization.tagIDs === undefined) {
      this.logModel.logOrganization.tagIDs = [];
    }
    if (this.logModel.tagModels === undefined) {
      this.logModel.tagModels = [];
    }
    this.showTagSelector = false;
  }

  toggleTagSelector() {
    this.showTagSelector = !this.showTagSelector;
  }

  closeTagSelector() {
    this.showTagSelector = false;
  }

  onTagModelSelected(selectedTagModel: TagModel) {
    this.logModel.tagModels.push(selectedTagModel);
    this.logModel.tagModels.sort(function (a: TagModel, b: TagModel) {
      return a.metadata.name.localeCompare(b.metadata.name);
    });
    this.logModel.logOrganization.tagIDs = Array.from(this.logModel.tagModels, (tagModel: TagModel) => tagModel.id);
  }

  onTagModelUnSelect(index: number) {
    this.logModel.tagModels.splice(index, 1);
    this.logModel.logOrganization.tagIDs.splice(index, 1);
  }
}
