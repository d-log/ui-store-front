import {Component, Input, OnInit} from '@angular/core';
import {Organization} from '../../../../../service/core/file/model/extra/data/log/extra/organization';
import {LogFileData} from '../../../../../service/core/file/model/extra/data/log/log-file-data';

@Component({
  selector: 'app-file-editor-organization',
  templateUrl: './file-editor-organization.component.html',
  styleUrls: ['./file-editor-organization.component.css']
})
export class FileEditorOrganizationComponent implements OnInit {
  @Input() data: LogFileData;

  ngOnInit() {
    if (!this.data.organization) {
      this.data.organization = new Organization();
    }
  }
}
