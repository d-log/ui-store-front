import {Component, Input, OnInit} from '@angular/core';
import {ImageInternalLogContent} from '../../../../../../service/core/file/model/extra/data/log/extra/log-content/type/image-internal/image-internal-log-content';
import {ImageModel} from '../../../../../../service/core/file/model/extra/data/image/image-model';

@Component({
  selector: 'app-log-content-image-default',
  templateUrl: './log-content-image-default.component.html',
  styleUrls: ['./log-content-image-default.component.css']
})
export class LogContentImageDefaultComponent implements OnInit {
  @Input() data: ImageInternalLogContent;

  ngOnInit() {
    if (!this.data) {
      this.data = new ImageInternalLogContent();
    }
    if (!this.data.imageModel) {
      const imageFileData = new ImageModel();
      imageFileData.imageURL = '';
      imageFileData.heightDividedByWidth = 1;
      this.data.imageModel = imageFileData;
    }
  }
}
