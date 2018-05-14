import {Component, Input, OnInit} from '@angular/core';
import {FileModel} from '../../../../../../service/core/file/model/file-model';
import {FileType} from '../../../../../../service/core/file/model/extra/file-type';
import {LogFileData} from '../../../../../../service/core/file/model/extra/data/log/log-file-data';

@Component({
  selector: 'app-file-editor-organization-directory',
  templateUrl: './file-editor-organization-directory.component.html',
  styleUrls: ['./file-editor-organization-directory.component.css']
})
export class FileEditorOrganizationDirectoryComponent implements OnInit {
  @Input() data: LogFileData;
  fileTypes: FileType[];

  ngOnInit() {
    this.fileTypes = [FileType.LogDirectoryFileData];
    if (this.data.organization.parentLogDirectoryFileIDs === undefined) {
      this.data.organization.parentLogDirectoryFileIDs = [];
    }
    if (this.data.parentLogDirectoryFileDatas === undefined) {
      this.data.parentLogDirectoryFileDatas = [];
    }
  }

  addSelectedDirectory(fileModel: FileModel) {
    if (!this.data.organization.parentLogDirectoryFileIDs.includes(fileModel.id)) {
      this.data.parentLogDirectoryFileDatas.push(fileModel);
      this.data.organization.parentLogDirectoryFileIDs.push(fileModel.id);
    }
  }

  removeSelectedDirectory(index: number) {
    this.data.parentLogDirectoryFileDatas.splice(index, 1);
    this.data.organization.parentLogDirectoryFileIDs = Array.from(this.data.parentLogDirectoryFileDatas, fileModel => fileModel.id);
  }
}
