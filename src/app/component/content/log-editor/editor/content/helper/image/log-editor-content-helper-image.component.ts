import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {LogModel} from '../../../../../../../service/core/file/model/extra/data/log/log-model';
import {LogContent} from '../../../../../../../service/core/file/model/extra/data/log/extra/log-content/log-content';
import {ImageModel} from '../../../../../../../service/core/file/model/extra/data/image/image-model';
import {ImageInternalLogContent} from '../../../../../../../service/core/file/model/extra/data/log/extra/log-content/type/image-internal/image-internal-log-content';

@Component({
  selector: 'app-log-editor-content-helper-image',
  templateUrl: './log-editor-content-helper-image.component.html',
  styleUrls: ['./log-editor-content-helper-image.component.css']
})
export class LogEditorContentHelperImageComponent implements OnInit {
  @Input() logModel: LogModel;
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

  selectedExistingImageLogData(selectedImageLogData: LogContent) {
    selectedImageLogData.logContentType = 'ImageInternalLogContent';
    selectedImageLogData.css = this.generateDefaultCSS();
    this.logModel.logContents.push(selectedImageLogData);
    this.onCloseHelper();
  }

  uploadedImageModel(imageModel: ImageModel) {
    this.addImageModel(imageModel);
  }

  addImageModel(imageModel: ImageModel) {
    const imageInternalLogData = new ImageInternalLogContent();
    imageInternalLogData.imageModelID = imageModel.id;
    imageInternalLogData.imageModel = imageModel;
    this.logModel.logContents.push(new LogContent('ImageInternalLogContent', this.generateDefaultCSS(), imageInternalLogData));
    this.onCloseHelper();
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
