import {Component, Input, OnInit} from '@angular/core';
import {LogModel} from '../../../../../service/core/file/model/extra/data/log/log-model';
import {LogContent} from '../../../../../service/core/file/model/extra/data/log/extra/log-data/log-content';
import {HeaderSectionLogContent} from '../../../../../service/core/file/model/extra/data/log/extra/log-data/type/_noncontent/header-section-log-content';
import {CommentSectionLogContent} from '../../../../../service/core/file/model/extra/data/log/extra/log-data/type/_noncontent/comment-section-log-content';

@Component({
  selector: 'app-log-editor-contents',
  templateUrl: './log-editor-contents.component.html',
  styleUrls: ['./log-editor-contents.component.css']
})
export class LogEditorContentsComponent implements OnInit {
  @Input() set data(data: LogModel) {
    this._data = data;
    this.ngOnInit();
  }

  _data: LogModel;
  displayAddHeader: boolean;
  displayAddComment: boolean;

  displayHelperType: string;

  constructor() {
    this.displayAddHeader = false;
    this.displayAddComment = false;
    this.displayHelperType = undefined;
  }

  ngOnInit() {
    if (this._data.logContents.filter((logData: LogContent) => logData.logContentType === 'HeaderSectionLogContent').length === 0) {
      this.displayAddHeader = true;
    }
    if (this._data.logContents.filter((logData: LogContent) => logData.logContentType === 'CommentSectionLogContent').length === 0) {
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
    const header = new HeaderSectionLogContent();
    this._data.logContents.push(new LogContent('HeaderSectionLogContent', this.generateDefaultCSS(), header));
    this.displayAddHeader = false;
  }

  addCommentSection() {
    const comment = new CommentSectionLogContent();
    this._data.logContents.push(new LogContent('CommentSectionLogContent', this.generateDefaultCSS(), comment));
    this.displayAddComment = false;
  }

  deleteLogData(index: number) {
    const logDataType = this._data.logContents[index].logContentType;

    if (logDataType === 'HeaderSectionLogContent') {
      this.displayAddHeader = true;
    } else if (logDataType === 'CommentSectionLogContent') {
      this.displayAddComment = true;
    }

    this._data.logContents.splice(index, 1);
  }
}
