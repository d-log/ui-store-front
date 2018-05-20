import {Component, Input, OnInit} from '@angular/core';
import {LogModel} from '../../../../../service/core/file/model/extra/data/log/log-model';
import {LogContent} from '../../../../../service/core/file/model/extra/data/log/extra/log-content/log-content';
import {HeaderSectionLogContent} from '../../../../../service/core/file/model/extra/data/log/extra/log-content/type/_section/header-section-log-content';
import {CommentSectionLogContent} from '../../../../../service/core/file/model/extra/data/log/extra/log-content/type/_section/comment-section-log-content';
import {ChildLogsSectionLogContent} from '../../../../../service/core/file/model/extra/data/log/extra/log-content/type/_section/child-logs-section-log-content';

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
  displayAddChildLogs: boolean;

  displayHelperType: string;

  constructor() {
    this.displayAddHeader = false;
    this.displayAddComment = false;
    this.displayAddChildLogs = false;
    this.displayHelperType = undefined;
  }

  ngOnInit() {
    if (this._data.logContents.filter((logData: LogContent) => logData.logContentType === 'HeaderSectionLogContent').length === 0) {
      this.displayAddHeader = true;
    }
    if (this._data.logContents.filter((logData: LogContent) => logData.logContentType === 'CommentSectionLogContent').length === 0) {
      this.displayAddComment = true;
    }
    if (this._data.logContents.filter((logData: LogContent) => logData.logContentType === 'ChildLogsSectionLogContent').length === 0) {
      this.displayAddChildLogs = true;
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

  addChildLogSection() {
    const childLogs = new ChildLogsSectionLogContent();
    this._data.logContents.push(new LogContent('ChildLogsSectionLogContent', ChildLogsSectionLogContent.generateDefaultCSS(), childLogs));
    this.displayAddChildLogs = false;
  }

  deleteLogData(index: number) {
    const logContentType = this._data.logContents[index].logContentType;

    if (logContentType === 'HeaderSectionLogContent') {
      this.displayAddHeader = true;
    } else if (logContentType === 'CommentSectionLogContent') {
      this.displayAddComment = true;
    } else if (logContentType === 'ChildLogsSectionLogContent') {
      this.displayAddChildLogs = true;
    }

    this._data.logContents.splice(index, 1);
  }
}
