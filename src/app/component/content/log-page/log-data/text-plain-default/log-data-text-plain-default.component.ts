import {Component, Input, OnInit} from '@angular/core';
import {LogData} from '../../../../../service/log/model/extra/logdata/log-data';

@Component({
  templateUrl: './log-data-text-plain-default.component.html',
  styleUrls: ['./log-data-text-plain-default.component.css']
})
export class LogDataTextPlainDefaultComponent implements OnInit {

  @Input() logData: LogData;

  text: string;

  constructor() {
  }

  ngOnInit() {
    const data = this.logData.data;
    this.text = data.text;
  }

}
