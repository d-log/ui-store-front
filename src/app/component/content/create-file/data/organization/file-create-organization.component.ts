import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Organization} from '../../../../../service/core/file/model/extra/data/log/extra/organization';
import {FileModel} from '../../../../../service/core/file/model/file-model';

@Component({
  selector: 'app-file-create-organization',
  templateUrl: './file-create-organization.component.html',
  styleUrls: ['./file-create-organization.component.css']
})
export class FileCreateOrganizationComponent implements OnInit {
  @Output() updateFileModel = new EventEmitter<boolean>();
  @Input() organization: Organization;

  tagFileModels: FileModel[];
  directoryFileModels: FileModel[];

  constructor() {
    this.initialize();
  }

  ngOnInit() {
    this.initialize();
  }

  initialize() {
    if (!this.organization) {
      this.organization = new Organization();
    }
    this.tagFileModels = [];
    this.organization.tagFileIDs = [];

    this.directoryFileModels = [];
    this.organization.parentLogDirectoryFileIDs = [];
  }

  onUpdateFileModel() {
    this.organization.tagFileIDs = Array.from(this.tagFileModels, model => model.id);
    this.organization.parentLogDirectoryFileIDs = Array.from(this.directoryFileModels, model => model.id);
    this.updateFileModel.emit(true);
  }
}
