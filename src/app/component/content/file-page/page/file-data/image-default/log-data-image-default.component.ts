import {Component, Input, OnInit} from '@angular/core';
import {LogData} from '../../../../../../service/core/file/model/extra/data/logdata/log-data';

@Component({
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
    const data = this.logData.data;
    this.img_src = data.imageURL;
    this.padding_bottom_percentage = data.imageMetaData.heightDivideWidth * 100;
  }

}
