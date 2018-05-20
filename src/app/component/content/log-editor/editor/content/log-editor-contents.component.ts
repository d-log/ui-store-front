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
  @Input() set logModel(logModel: LogModel) {
    this._logModel = logModel;
    this.ngOnInit();
  }

  _logModel: LogModel;
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
    if (this._logModel.logContents.filter((content: LogContent) => content.logContentType === 'HeaderSectionLogContent').length === 0) {
      this.displayAddHeader = true;
    }
    if (this._logModel.logContents.filter((content: LogContent) => content.logContentType === 'CommentSectionLogContent').length === 0) {
      this.displayAddComment = true;
    }
    if (this._logModel.logContents.filter((content: LogContent) => content.logContentType === 'ChildLogsSectionLogContent').length === 0) {
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

  addHeaderSection() {
    this._logModel.logContents.push(LogContent.defaultHeader());
    this.displayAddHeader = false;
  }

  addCommentSection() {
    this._logModel.logContents.push(LogContent.defaultComment());
    this.displayAddComment = false;
  }

  addChildLogSection() {
    this._logModel.logContents.push(LogContent.defaultChildLogs());
    this.displayAddChildLogs = false;
  }

  deleteLogData(index: number) {
    const logContentType = this._logModel.logContents[index].logContentType;

    if (logContentType === 'HeaderSectionLogContent') {
      this.displayAddHeader = true;
    } else if (logContentType === 'CommentSectionLogContent') {
      this.displayAddComment = true;
    } else if (logContentType === 'ChildLogsSectionLogContent') {
      this.displayAddChildLogs = true;
    }

    this._logModel.logContents.splice(index, 1);
  }
}
