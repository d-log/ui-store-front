import {Component, Input, OnInit} from '@angular/core';
import {LogData} from '../../../../../../service/core/file/model/extra/data/log/extra/log-data/log-data';
import {ImageInternalLogData} from '../../../../../../service/core/file/model/extra/data/log/extra/log-data/type/image-internal/image-internal-log-data';

@Component({
  selector: 'app-log-data-image-default',
  templateUrl: './log-data-image-default.component.html',
  styleUrls: ['./log-data-image-default.component.css']
})
export class LogDataImageDefaultComponent implements OnInit {

  @Input() logData: LogData;

  img_src: string;
  padding_bottom_percentage: number;

  constructor() {
  }

  ngOnInit() {
    const data: ImageInternalLogData = this.logData.data;
    if (!!data && !!data.imageFileData) {
      this.img_src = data.imageFileData.imageURL;
      this.padding_bottom_percentage = data.imageFileData.heightDividedByWidth * 100;
    }
  }
}
