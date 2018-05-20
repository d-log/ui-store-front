import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {LogModel} from '../../../../service/core/file/model/extra/data/log/log-model';
import {Metadata} from '../../../../service/core/file/model/extra/metadata';
import {LogOrganization} from '../../../../service/core/file/model/extra/data/log/extra/log-organization';
import {LogContent} from '../../../../service/core/file/model/extra/data/log/extra/log-content/log-content';
import {HeaderSectionLogContent} from '../../../../service/core/file/model/extra/data/log/extra/log-content/type/_section/header-section-log-content';
import {CommentSectionLogContent} from '../../../../service/core/file/model/extra/data/log/extra/log-content/type/_section/comment-section-log-content';
import {LogDisplayOverride} from '../../../../service/core/file/model/extra/data/log/extra/log-type-override/log-display-override';
import {TileLogModelOverride} from '../../../../service/core/file/model/extra/data/log/extra/log-type-override/extra/tile-log-model-override';
import {ChildLogsSectionLogContent} from '../../../../service/core/file/model/extra/data/log/extra/log-content/type/_section/child-logs-section-log-content';

@Component({
  selector: 'app-log-editor',
  templateUrl: './log-editor.component.html',
  styleUrls: ['./log-editor.component.css']
})
export class LogEditorComponent implements OnInit {

  _logModel: LogModel;
  @Output() doneEditing = new EventEmitter<LogModel>();

  @Input() set logModel(logModel: LogModel) {
    this.updateLogModel(logModel);
  }

  ngOnInit() {
    this.updateLogModel(undefined);
  }

  updateLogModel(logModel: LogModel) {
    if (logModel != null) {
      this._logModel = this.scrubLogModel(logModel);
    } else {
      this._logModel = this.generateDefaultLogFileModel();
    }
  }

  scrubLogModel(logModel: LogModel) {
    if (logModel == null) {
      logModel = new LogModel();
    }
    if (logModel.metadata == null) {
      const metadata = new Metadata();
      metadata.name = 'Name';
      metadata.description = 'description';
      metadata.created = +new Date();
      logModel.metadata = metadata;
    }
    if (logModel.logOrganization == null) {
      logModel.logOrganization = new LogOrganization();
    }
    if (logModel.logOrganization.parentLogIDs == null) {
      logModel.logOrganization.parentLogIDs = [];
    }
    if (logModel.logOrganization.tagIDs == null) {
      logModel.logOrganization.tagIDs = [];
    }
    if (logModel.logOrganization.childLogIDs == null) {
      logModel.logOrganization.childLogIDs = [];
    }
    if (logModel.logContents == null) {
      logModel.logContents = [
        new LogContent('HeaderSectionLogContent', this.generateDefaultCSS(), new HeaderSectionLogContent()),
        new LogContent('ChildLogsSectionLogContent', ChildLogsSectionLogContent.generateDefaultCSS(), new ChildLogsSectionLogContent()),
        new LogContent('CommentSectionLogContent', this.generateDefaultCSS(), new CommentSectionLogContent()),
      ];
    }
    if (logModel.logDisplayOverride == null) {
      logModel.logDisplayOverride = new LogDisplayOverride();
    }
    if (logModel.logDisplayOverride.tile == null) {
      logModel.logDisplayOverride.tile = new TileLogModelOverride();
    }

    return logModel;
  }

  generateDefaultLogFileModel() {
    const logModel = new LogModel();

    const metadata = new Metadata();
    metadata.name = 'Name';
    metadata.description = 'description';
    metadata.created = +new Date();
    logModel.metadata = metadata;

    logModel.logOrganization = new LogOrganization();
    logModel.logOrganization.tagIDs = [];
    logModel.logOrganization.parentLogIDs = [];
    logModel.logOrganization.childLogIDs = [];

    logModel.logContents = [
      new LogContent('HeaderSectionLogContent', this.generateDefaultCSS(), new HeaderSectionLogContent()),
      new LogContent('ChildLogsSectionLogContent', ChildLogsSectionLogContent.generateDefaultCSS(), new ChildLogsSectionLogContent()),
      new LogContent('CommentSectionLogContent', this.generateDefaultCSS(), new CommentSectionLogContent()),
    ];
    logModel.logDisplayOverride = new LogDisplayOverride();
    logModel.logDisplayOverride.tile = new TileLogModelOverride();

    return logModel;
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
    this.doneEditing.emit(this._logModel);
  }

  consoleFileModelJSON() {
    // this would be a deep clone (const clone = this.tagModel) wont work
    // bc setting clone undefined would actually undefine this.tagModel
    const clone: LogModel = JSON.parse(JSON.stringify(this._logModel));

    // cleanup unnecessary fields
    clone.metadata.created = undefined;
    clone.tagModels = undefined;
    clone.parentLogModels = undefined;
    clone.numLogContents = undefined;

    clone.logContents.map((logContent: LogContent) => {
      if (logContent.logContentType === 'ImageInternalLogContent') {
        logContent.data.imageModel = undefined;
      }
    });

    // this console.log is used, unless there's a better way to display the json
    console.log(JSON.stringify(clone, null, '\t'));
  }
}
