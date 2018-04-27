import {Component, Input, OnInit} from '@angular/core';
import {LogData} from '../../../../../service/core/log/model/extra/logdata/log-data';

@Component({
  templateUrl: './log-data-default-default.component.html',
  styleUrls: ['./log-data-default-default.component.css']
})
export class LogDataDefaultDefaultComponent implements OnInit {

  @Input() logData: LogData;
  logDataType: string;

  constructor() {
  }

  ngOnInit() {
    this.logDataType = this.logData.logDataType;
  }

}
