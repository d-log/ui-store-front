import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {LogFileData} from '../../../../../../../service/core/file/model/extra/data/log/log-file-data';
import {FileModel} from '../../../../../../../service/core/file/model/file-model';
import {LogData} from '../../../../../../../service/core/file/model/extra/data/log/extra/log-data/log-data';
import {ImageInternalLogData} from '../../../../../../../service/core/file/model/extra/data/log/extra/log-data/type/image-internal/image-internal-log-data';

@Component({
  selector: 'app-file-create-log-data-helper-image',
  templateUrl: './file-create-log-data-helper-image.component.html',
  styleUrls: ['./file-create-log-data-helper-image.component.css']
})
export class FileCreateLogDataHelperImageComponent implements OnInit {
  @Input() data: LogFileData;
  @Output() closeHelper = new EventEmitter<boolean>();

  imageAddType: string;

  ngOnInit() {
    this.imageAddType = 'upload';
  }

  changeImageAddType(imageAddType: string) {
    this.imageAddType = imageAddType;
  }

  onCloseHelper() {
    this.closeHelper.emit(true);
  }

  selectedExistingImageLogData(selectedImageLogData: LogData) {
    selectedImageLogData.logDataType = 'ImageInternalLogData';
    selectedImageLogData.css = this.generateDefaultCSS();
    this.data.logDatas.push(selectedImageLogData);
  }

  uploadedImageLogFile(imageFileModel: FileModel) {
    this.addImageFileModel(imageFileModel);
  }

  addImageFileModel(imageFileModel: FileModel) {
    const imageInternalLogData = new ImageInternalLogData();
    imageInternalLogData.imageID = imageFileModel.id;
    imageInternalLogData.imageFileData = imageFileModel.data;
    this.data.logDatas.push(new LogData('ImageInternalLogData', this.generateDefaultCSS(), imageInternalLogData));
  }

  generateDefaultCSS() {
    return {
      'margin-top': '20px',
      'margin-left': 'auto',
      'margin-right': 'auto',
      'max-width': '800px'
    };
  }
}
