import {Component, Input, OnInit} from '@angular/core';
import {FileModel} from '../../../../../../service/core/file/model/file-model';
import {LogFileData} from '../../../../../../service/core/file/model/extra/data/log/log-file-data';

@Component({
  selector: 'app-file-editor-organization-tag',
  templateUrl: './file-editor-organization-tag.component.html',
  styleUrls: ['./file-editor-organization-tag.component.css']
})
export class FileEditorOrganizationTagComponent implements OnInit {
  @Input() data: LogFileData;

  showTagSelector: boolean;

  ngOnInit() {
    if (this.data.organization.tagFileIDs === undefined) {
      this.data.organization.tagFileIDs = [];
    }
    if (this.data.tagFileDatas === undefined) {
      this.data.tagFileDatas = [];
    }
    this.showTagSelector = false;
  }

  openTagSelector() {
    this.showTagSelector = true;
  }

  closeTagSelector() {
    this.showTagSelector = false;
  }

  onTagModelSelected(tagFileModel: FileModel) {
    this.data.tagFileDatas.push(tagFileModel);
    this.data.tagFileDatas.sort(function (a: FileModel, b: FileModel) {
      return a.metadata.name.localeCompare(b.metadata.name);
    });
    this.data.organization.tagFileIDs = Array.from(this.data.tagFileDatas, fileModel => fileModel.id);
  }

  onTagModelUnSelect(index: number) {
    this.data.tagFileDatas.splice(index, 1);
    this.data.organization.tagFileIDs.splice(index, 1);
  }
}
