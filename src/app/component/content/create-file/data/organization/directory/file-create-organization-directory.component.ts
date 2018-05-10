import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FileModel} from '../../../../../../service/core/file/model/file-model';
import {FileType} from '../../../../../../service/core/file/model/extra/file-type';

@Component({
  selector: 'app-file-create-organization-directory',
  templateUrl: './file-create-organization-directory.component.html',
  styleUrls: ['./file-create-organization-directory.component.css']
})
export class FileCreateOrganizationDirectoryComponent {
  @Output() updateFileModel = new EventEmitter<boolean>();

  @Input() selectedDirectoryFileModels: FileModel[];
  @Input() selectedDirectoryFileModelIDs: string[];
  fileTypes: FileType[];

  constructor() {
    this.fileTypes = [FileType.LogDirectoryFileData];
  }
}
