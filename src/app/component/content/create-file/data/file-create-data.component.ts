import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {LogFileData} from '../../../../service/core/file/model/extra/data/log/log-file-data';
import {Organization} from '../../../../service/core/file/model/extra/data/log/extra/organization';
import {FileCreateOrganizationComponent} from './organization/file-create-organization.component';

@Component({
  selector: 'app-file-create-data',
  templateUrl: './file-create-data.component.html',
  styleUrls: ['./file-create-data.component.css']
})
export class FileCreateDataComponent implements OnInit {
  @ViewChild(FileCreateOrganizationComponent) fileCreateOrganizationComponent: FileCreateOrganizationComponent;
  @Output() updateFileModel = new EventEmitter<boolean>();
  @Input() data: LogFileData;

  ngOnInit() {
    this.initialize();
  }

  initialize() {
    if (!!this.data) {
      if (this.data.organization === undefined) {
        this.data.organization = new Organization();
      }
      if (this.data.logDatas === undefined) {
        this.data.logDatas = [];
      }
    }
  }

  onUpdateFileModel() {
    this.data.tagFileDatas = this.fileCreateOrganizationComponent.tagFileModels;
    this.updateFileModel.emit(true);
  }
}
