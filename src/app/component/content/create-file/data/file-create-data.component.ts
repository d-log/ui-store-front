import {Component, Input, OnInit} from '@angular/core';
import {LogFileData} from '../../../../service/core/file/model/extra/data/log/log-file-data';
import {Organization} from '../../../../service/core/file/model/extra/data/log/extra/organization';

@Component({
  selector: 'app-file-create-data',
  templateUrl: './file-create-data.component.html',
  styleUrls: ['./file-create-data.component.css']
})
export class FileCreateDataComponent implements OnInit {
  @Input() data: LogFileData;

  ngOnInit() {
    if (this.data.logDatas === undefined) {
      this.data.logDatas = [];
    }
    if (this.data.organization === undefined) {
      this.data.organization = new Organization();
    }
  }
}
