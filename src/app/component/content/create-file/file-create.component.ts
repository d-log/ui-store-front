import {Component} from '@angular/core';
import {FileModel} from '../../../service/core/file/model/file-model';
import {Metadata} from '../../../service/core/file/model/extra/metadata';
import {LogFileData} from '../../../service/core/file/model/extra/data/log/log-file-data';

@Component({
  selector: 'app-file-create',
  templateUrl: './file-create.component.html',
  styleUrls: ['./file-create.component.css']
})
export class FileCreateComponent {

  fileModel: FileModel;

  constructor() {
    this.fileModel = new FileModel();
    this.fileModel.metadata = new Metadata();
    this.fileModel.data = new LogFileData();
  }

  consoleFileModelJSON() {
    const fileModel = this.fileModel;
    fileModel.metadata.created = undefined;
    fileModel.data.tagFileDatas = undefined;
    fileModel.data.parentLogDirectoryFileDatas = undefined;
    fileModel.data.numLogDatas = undefined;
    console.log(JSON.stringify(fileModel, null, '\t'));
    console.log(JSON.stringify(this.fileModel, null, '\t'));
  }

  updateFileModel() {
    const fileModel = new FileModel();
    fileModel.metadata = this.fileModel.metadata;
    fileModel.data = this.fileModel.data;
    this.fileModel = fileModel;
  }
}
