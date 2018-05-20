import {Component, Input, OnInit} from '@angular/core';
import {ImageModel} from '../../../../../../service/core/model/data/image/image-model';
import {ImageInternalLogContent} from '../../../../../../service/core/model/data/log/extra/log-content/type/image-internal/image-internal-log-content';

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
