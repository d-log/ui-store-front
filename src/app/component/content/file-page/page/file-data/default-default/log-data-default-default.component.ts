import {Component, Input, OnInit} from '@angular/core';
import {LogData} from '../../../../../../service/core/file/model/extra/data/log/extra/log-data/log-data';

@Component({
  selector: 'app-log-data-default-default',
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
