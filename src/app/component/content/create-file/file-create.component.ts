import {Component, OnInit} from '@angular/core';
import {FileModel} from '../../../service/core/file/model/file-model';
import {Metadata} from '../../../service/core/file/model/extra/metadata';
import {LogFileData} from '../../../service/core/file/model/extra/data/log/log-file-data';
import {LogData} from '../../../service/core/file/model/extra/data/log/extra/log-data/log-data';
import {HeaderSectionLogData} from '../../../service/core/file/model/extra/data/log/extra/log-data/type/_noncontent/header-section-log-data';
import {CommentSectionLogData} from '../../../service/core/file/model/extra/data/log/extra/log-data/type/_noncontent/comment-section-log-data';
import {LogTypeOverride} from '../../../service/core/file/model/extra/data/log/extra/log-type-override/log-type-override';
import {TileLogFileDataOverride} from '../../../service/core/file/model/extra/data/log/extra/log-type-override/extra/tile-log-file-data-override';

@Component({
  selector: 'app-file-create',
  templateUrl: './file-create.component.html',
  styleUrls: ['./file-create.component.css']
})
export class FileCreateComponent implements OnInit {

  fileModel: FileModel;

  ngOnInit() {
    const fileModel = new FileModel();

    const metadata = new Metadata();
    metadata.name = 'Name';
    metadata.description = 'description';
    metadata.created = +new Date();
    fileModel.metadata = metadata;

    const logFileData = new LogFileData();
    logFileData.logDatas = [
      new LogData('HeaderSectionLogData', {'margin-top': '20px'}, new HeaderSectionLogData()),
      new LogData('CommentSectionLogData', {'margin-top': '20px'}, new CommentSectionLogData()),
    ];

    const logTypeOverride = new LogTypeOverride();
    const tileOverride = new TileLogFileDataOverride();
    tileOverride.logDataToDisplayIndex = 0;
    logTypeOverride.tile = tileOverride;
    logFileData.logTypeOverride = logTypeOverride;

    fileModel.data = logFileData;

    this.fileModel = fileModel;
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
