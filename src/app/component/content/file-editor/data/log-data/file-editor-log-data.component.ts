import {Component, Input, OnInit} from '@angular/core';
import {LogData} from '../../../../../service/core/file/model/extra/data/log/extra/log-data/log-data';
import {HeaderSectionLogData} from '../../../../../service/core/file/model/extra/data/log/extra/log-data/type/_noncontent/header-section-log-data';
import {CommentSectionLogData} from '../../../../../service/core/file/model/extra/data/log/extra/log-data/type/_noncontent/comment-section-log-data';
import {LogFileData} from '../../../../../service/core/file/model/extra/data/log/log-file-data';

@Component({
  selector: 'app-file-editor-log-data',
  templateUrl: './file-editor-log-data.component.html',
  styleUrls: ['./file-editor-log-data.component.css']
})
export class FileEditorLogDataComponent implements OnInit {
  @Input() data: LogFileData;

  displayAddHeader: boolean;
  displayAddComment: boolean;

  displayHelperType: string;

  constructor() {
    this.displayAddHeader = false;
    this.displayAddComment = false;
    this.displayHelperType = undefined;
  }

  ngOnInit() {
    if (this.data.logDatas.filter((logData: LogData) => logData.logDataType === 'HeaderSectionLogData').length === 0) {
      this.displayAddHeader = true;
    }
    if (this.data.logDatas.filter((logData: LogData) => logData.logDataType === 'CommentSectionLogData').length === 0) {
      this.displayAddComment = true;
    }
  }

  closeHelper() {
    this.displayHelperType = undefined;
  }

  toggleHelper(type: string) {
    if (this.displayHelperType === type) {
      this.displayHelperType = undefined;
    } else {
      this.displayHelperType = type;
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

  addHeaderSection() {
    const header = new HeaderSectionLogData();
    this.data.logDatas.push(new LogData('HeaderSectionLogData', this.generateDefaultCSS(), header));
    this.displayAddHeader = false;
  }

  addCommentSection() {
    const comment = new CommentSectionLogData();
    this.data.logDatas.push(new LogData('CommentSectionLogData', this.generateDefaultCSS(), comment));
    this.displayAddComment = false;
  }

  deleteLogData(index: number) {
    const logDataType = this.data.logDatas[index].logDataType;

    if (logDataType === 'HeaderSectionLogData') {
      this.displayAddHeader = true;
    } else if (logDataType === 'CommentSectionLogData') {
      this.displayAddComment = true;
    }

    this.data.logDatas.splice(index, 1);
  }
}
