import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FileModel} from '../../../../../../service/core/file/model/file-model';

@Component({
  selector: 'app-file-create-organization-directory',
  templateUrl: './file-create-organization-directory.component.html',
  styleUrls: ['./file-create-organization-directory.component.css']
})
export class FileCreateOrganizationDirectoryComponent {
  @Output() updateFileModel = new EventEmitter<boolean>();

  @Input() selectedDirectoryFileModels: FileModel[];
  @Input() selectedDirectoryFileModelIDs: string[];
}
