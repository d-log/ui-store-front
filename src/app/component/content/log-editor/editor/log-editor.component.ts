import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {LogModel} from '../../../../service/core/model/data/log/log-model';
import {TileLogModelOverride} from '../../../../service/core/model/data/log/extra/log-type-override/extra/tile-log-model-override';
import {LogDisplayOverride} from '../../../../service/core/model/data/log/extra/log-type-override/log-display-override';
import {LogContent} from '../../../../service/core/model/data/log/extra/log-content/log-content';
import {LogOrganization} from '../../../../service/core/model/data/log/extra/log-organization';
import {Metadata} from '../../../../service/core/model/data/metadata';

@Component({
  selector: 'app-log-editor',
  templateUrl: './log-editor.component.html',
  styleUrls: ['./log-editor.component.css']
})
export class LogEditorComponent implements OnInit {
  @Input() set logModel(logModel: LogModel) {
    this.updateLogModel(logModel);
  }

  _logModel: LogModel;
  @Output() doneEditing = new EventEmitter<LogModel>();

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
    const defaultLogModel = this.generateDefaultLogFileModel();

    if (logModel == null) {
      logModel = defaultLogModel;
    } else {
      if (logModel.metadata == null) {
        logModel.metadata = defaultLogModel.metadata;
      }
      if (logModel.logOrganization == null) {
        logModel.logOrganization = defaultLogModel.logOrganization;
      } else {
        if (logModel.logOrganization.parentLogIDs == null) {
          logModel.logOrganization.parentLogIDs = defaultLogModel.logOrganization.parentLogIDs;
        }
        if (logModel.logOrganization.tagIDs == null) {
          logModel.logOrganization.tagIDs = defaultLogModel.logOrganization.tagIDs;
        }
        if (logModel.logOrganization.childLogIDs == null) {
          logModel.logOrganization.childLogIDs = defaultLogModel.logOrganization.childLogIDs;
        }
      }
      if (logModel.logContents == null) {
        logModel.logContents = defaultLogModel.logContents;
      }
      if (logModel.logDisplayOverride == null) {
        logModel.logDisplayOverride = defaultLogModel.logDisplayOverride;
      } else {
        if (logModel.logDisplayOverride.tile == null) {
          logModel.logDisplayOverride.tile = defaultLogModel.logDisplayOverride.tile;
        }
      }
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
      LogContent.defaultHeader(),
      LogContent.defaultChildLogs(),
      LogContent.defaultComment(),
    ];
    logModel.logDisplayOverride = new LogDisplayOverride();
    logModel.logDisplayOverride.tile = new TileLogModelOverride();

    return logModel;
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

    console.log(JSON.stringify(clone, null, '\t'));
  }
}
