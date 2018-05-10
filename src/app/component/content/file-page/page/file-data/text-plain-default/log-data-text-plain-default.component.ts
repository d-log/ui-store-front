import {Component, Input, OnInit} from '@angular/core';
import {LogData} from '../../../../../../service/core/file/model/extra/data/log/extra/log-data/log-data';

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
    this.text = this.logData.data.text;
  }

}
