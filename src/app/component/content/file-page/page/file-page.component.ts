import {Component, Input} from '@angular/core';
import 'rxjs/add/operator/switchMap';
import {FileModel} from '../../../../service/core/file/model/file-model';
import {LogData} from '../../../../service/core/file/model/extra/data/log/extra/log-data/log-data';

@Component({
  selector: 'app-file-page',
  templateUrl: './file-page.component.html',
  styleUrls: ['./file-page.component.css']
})
export class FilePageComponent {
  @Input() set fileModel(fileModel: FileModel) {
    this.initialize(fileModel);
  }

  _fileModel: FileModel;
  logDatas: LogData[];

  initialize(fileModel: FileModel) {
    this._fileModel = fileModel;
    this.logDatas = [];

    if (!!fileModel) {
      if (!!fileModel.data.logDatas) {
        this.logDatas = fileModel.data.logDatas;
      }
    }
  }
}
