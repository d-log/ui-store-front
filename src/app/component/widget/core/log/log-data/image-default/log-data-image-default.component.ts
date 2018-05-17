import {Component, Input, OnInit} from '@angular/core';
import {ImageInternalLogData} from '../../../../../../service/core/file/model/extra/data/log/extra/log-data/type/image-internal/image-internal-log-data';
import {ImageFileData} from '../../../../../../service/core/file/model/extra/data/image/image-file-data';

@Component({
  selector: 'app-log-data-image-default',
  templateUrl: './log-data-image-default.component.html',
  styleUrls: ['./log-data-image-default.component.css']
})
export class LogDataImageDefaultComponent implements OnInit {
  @Input() data: ImageInternalLogData;

  ngOnInit() {
    if (!this.data) {
      this.data = new ImageInternalLogData();
    }
    if (!this.data.imageFileData) {
      const imageFileData = new ImageFileData();
      imageFileData.imageURL = '';
      imageFileData.heightDividedByWidth = 1;
      this.data.imageFileData = imageFileData;
    }
  }
}
