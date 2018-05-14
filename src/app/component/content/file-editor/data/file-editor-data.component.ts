import {Component, Input, OnInit} from '@angular/core';
import {LogFileData} from '../../../../service/core/file/model/extra/data/log/log-file-data';
import {Organization} from '../../../../service/core/file/model/extra/data/log/extra/organization';
import {LogTypeOverride} from '../../../../service/core/file/model/extra/data/log/extra/log-type-override/log-type-override';
import {TileLogFileDataOverride} from '../../../../service/core/file/model/extra/data/log/extra/log-type-override/extra/tile-log-file-data-override';

@Component({
  selector: 'app-file-editor-data',
  templateUrl: './file-editor-data.component.html',
  styleUrls: ['./file-editor-data.component.css']
})
export class FileEditorDataComponent implements OnInit {
  @Input() data: LogFileData;

  ngOnInit() {
    if (this.data.logDatas === undefined) {
      this.data.logDatas = [];
    }
    if (this.data.organization === undefined) {
      this.data.organization = new Organization();
    }
    if (this.data.logTypeOverride === undefined) {
      this.data.logTypeOverride = new LogTypeOverride();
    }
    if (this.data.logTypeOverride.tile === undefined) {
      this.data.logTypeOverride.tile = new TileLogFileDataOverride();
    }
  }
}
