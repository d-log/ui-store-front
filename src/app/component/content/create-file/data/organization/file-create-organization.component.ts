import {Component, Input, OnInit} from '@angular/core';
import {Organization} from '../../../../../service/core/file/model/extra/data/log/extra/organization';
import {LogFileData} from '../../../../../service/core/file/model/extra/data/log/log-file-data';

@Component({
  selector: 'app-file-create-organization',
  templateUrl: './file-create-organization.component.html',
  styleUrls: ['./file-create-organization.component.css']
})
export class FileCreateOrganizationComponent implements OnInit {
  @Input() data: LogFileData;

  ngOnInit() {
    if (!this.data.organization) {
      this.data.organization = new Organization();
    }
  }
}
