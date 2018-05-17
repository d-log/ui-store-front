import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FileModel} from '../../../../service/core/file/model/file-model';
import {Metadata} from '../../../../service/core/file/model/extra/metadata';
import {LogFileData} from '../../../../service/core/file/model/extra/data/log/log-file-data';
import {Organization} from '../../../../service/core/file/model/extra/data/log/extra/organization';
import {CommentSectionLogData} from '../../../../service/core/file/model/extra/data/log/extra/log-data/type/_noncontent/comment-section-log-data';
import {LogTypeOverride} from '../../../../service/core/file/model/extra/data/log/extra/log-type-override/log-type-override';
import {LogData} from '../../../../service/core/file/model/extra/data/log/extra/log-data/log-data';
import {HeaderSectionLogData} from '../../../../service/core/file/model/extra/data/log/extra/log-data/type/_noncontent/header-section-log-data';
import {TileLogFileDataOverride} from '../../../../service/core/file/model/extra/data/log/extra/log-type-override/extra/tile-log-file-data-override';

@Component({
  selector: 'app-file-editor',
  templateUrl: './file-editor.component.html',
  styleUrls: ['./file-editor.component.css']
})
export class FileEditorComponent implements OnInit {

  _fileModel: FileModel;
  @Output() doneEditing = new EventEmitter<FileModel>();

  @Input() set fileModel(fileModel: FileModel) {
    this.updateFileModel(fileModel);
  }

  ngOnInit() {
    this.updateFileModel(undefined);
  }

  updateFileModel(fileModel: FileModel) {
    if (fileModel != null) {
      this._fileModel = this.scrubLogFileModel(fileModel);
    } else {
      this._fileModel = this.generateDefaultLogFileModel();
    }
  }

  scrubLogFileModel(fileModel: FileModel) {
    if (fileModel.metadata == null) {
      const metadata = new Metadata();
      metadata.name = 'Name';
      metadata.description = 'description';
      metadata.created = +new Date();
      fileModel.metadata = metadata;
    }
    if (fileModel.data == null) {
      fileModel.data = new LogFileData();
    }
    if (fileModel.data.organization == null) {
      fileModel.data.organization = new Organization();
    }
    if (fileModel.data.organization.parentLogDirectoryFileIDs == null) {
      fileModel.data.organization.parentLogDirectoryFileIDs = [];
    }
    if (fileModel.data.organization.tagFileIDs == null) {
      fileModel.data.organization.tagFileIDs = [];
    }
    if (fileModel.data.logDatas == null) {
      fileModel.data.logDatas = [
        new LogData('HeaderSectionLogData', this.generateDefaultCSS(), new HeaderSectionLogData()),
        new LogData('CommentSectionLogData', this.generateDefaultCSS(), new CommentSectionLogData()),
      ];
    }
    if (fileModel.data.logTypeOverride == null) {
      fileModel.data.logTypeOverride = new LogTypeOverride();
    }
    if (fileModel.data.logTypeOverride.tile == null) {
      fileModel.data.logTypeOverride.tile = new TileLogFileDataOverride();
    }

    return fileModel;
  }

  generateDefaultLogFileModel() {
    const fileModel = new FileModel();

    const metadata = new Metadata();
    metadata.name = 'Name';
    metadata.description = 'description';
    metadata.created = +new Date();
    fileModel.metadata = metadata;
    fileModel.data = new LogFileData();

    fileModel.data.organization = new Organization();
    fileModel.data.organization.tagFileIDs = [];
    fileModel.data.organization.parentLogDirectoryFileIDs = [];

    fileModel.data.logDatas = [
      new LogData('HeaderSectionLogData', this.generateDefaultCSS(), new HeaderSectionLogData()),
      new LogData('CommentSectionLogData', this.generateDefaultCSS(), new CommentSectionLogData()),
    ];
    fileModel.data.logTypeOverride = new LogTypeOverride();
    fileModel.data.logTypeOverride.tile = new TileLogFileDataOverride();

    return fileModel;
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
    this.doneEditing.emit(this._fileModel);
  }

  consoleFileModelJSON() {
    // this would be a deep clone (const clone = this.fileModel) wont work
    // bc setting clone undefined would actually undefine this.fileModel
    const clone: FileModel = JSON.parse(JSON.stringify(this._fileModel));

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
