import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FileModel} from '../../../service/core/file/model/file-model';
import {Metadata} from '../../../service/core/file/model/extra/metadata';
import {LogFileData} from '../../../service/core/file/model/extra/data/log/log-file-data';
import {LogData} from '../../../service/core/file/model/extra/data/log/extra/log-data/log-data';
import {HeaderSectionLogData} from '../../../service/core/file/model/extra/data/log/extra/log-data/type/_noncontent/header-section-log-data';
import {CommentSectionLogData} from '../../../service/core/file/model/extra/data/log/extra/log-data/type/_noncontent/comment-section-log-data';

@Component({
  selector: 'app-file-editor',
  templateUrl: './file-editor.component.html',
  styleUrls: ['./file-editor.component.css']
})
export class FileEditorComponent implements OnInit {

  @Input() fileModel: FileModel;
  @Output() doneEditing = new EventEmitter<FileModel>();

  ngOnInit() {
    if (this.fileModel === undefined) {
      this.fileModel = new FileModel();
    }
    if (this.fileModel.metadata === undefined) {
      const metadata = new Metadata();
      metadata.name = 'Name';
      metadata.description = 'description';
      metadata.created = +new Date();
      this.fileModel.metadata = metadata;
    }
    if (this.fileModel.data === undefined) {
      this.fileModel.data = new LogFileData();
    }
    if (this.fileModel.data.logDatas === undefined) {
      this.fileModel.data.logDatas = [
        new LogData('HeaderSectionLogData', this.generateDefaultCSS(), new HeaderSectionLogData()),
        new LogData('CommentSectionLogData', this.generateDefaultCSS(), new CommentSectionLogData()),
      ];
    }
  }

  generateDefaultCSS() {
    return {
      'margin-top': '20px',
      'margin-left': 'auto',
      'margin-right': 'auto',
      'max-width': '800px'
    };
  }

  onDoneEditing() {
    this.doneEditing.emit(this.fileModel);
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
