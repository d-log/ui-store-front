import {Component, OnInit} from '@angular/core';
import {FileModel} from '../../../service/core/file/model/file-model';
import {Metadata} from '../../../service/core/file/model/extra/metadata';
import {LogFileData} from '../../../service/core/file/model/extra/data/log/log-file-data';
import {LogData} from '../../../service/core/file/model/extra/data/log/extra/log-data/log-data';

@Component({
  selector: 'app-file-create',
  templateUrl: './file-create.component.html',
  styleUrls: ['./file-create.component.css']
})
export class FileCreateComponent implements OnInit {

  fileModel: FileModel;

  constructor() {
    this.fileModel = new FileModel();
    const metadata = new Metadata();
    metadata.name = '';
    metadata.description = '';
    metadata.created = +new Date();
    metadata.displayCommentSection = true;
    this.fileModel.metadata = metadata;
    this.fileModel.data = new LogFileData();
  }

  ngOnInit() {
    this.fileModel = new FileModel();
    const metadata = new Metadata();
    metadata.name = '';
    metadata.description = '';
    metadata.created = +new Date();
    metadata.displayCommentSection = true;
    this.fileModel.metadata = metadata;
    this.fileModel.data = new LogFileData();
  }

  consoleFileModelJSON() {
    // this would be a deep clone (const clone = this.fileModel) wont work
    // bc setting clone undefined would actually undefine this.fileModel
    const clone: FileModel = JSON.parse(JSON.stringify(this.fileModel));

    // cleanup unnecessary fields
    clone.metadata.created = undefined;
    clone.data.tagFileDatas = undefined;
    clone.data.parentLogDirectoryFileDatas = undefined;
    clone.data.numLogDatas = undefined;
    clone.data.logDatas.map((logData: LogData) => {
      if (logData.logDataType === 'ImageInternalLogData') {
        logData.data.imageFileData = undefined;
      }
    });

    // this console.log is used, unless there's a better way to display the json
    console.log(JSON.stringify(clone, null, '\t'));
  }
}
