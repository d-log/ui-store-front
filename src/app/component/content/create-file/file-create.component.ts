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
    // this would be a deep clone (const clone = this.fileModel) wont work
    // bc setting clone undefined would actually undefine this.fileModel
    const clone = JSON.parse(JSON.stringify(this.fileModel));
    clone.metadata.created = undefined;
    clone.data.tagFileDatas = undefined;
    clone.data.parentLogDirectoryFileDatas = undefined;
    clone.data.numLogDatas = undefined;
    console.log(JSON.stringify(clone, null, '\t'));
  }

  updateFileModel() {
    const fileModel = new FileModel();
    fileModel.metadata = this.fileModel.metadata;
    fileModel.data = this.fileModel.data;
    this.fileModel = fileModel;
  }
}
