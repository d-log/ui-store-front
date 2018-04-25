import {Component, Input, OnInit} from '@angular/core';
import {LogData} from '../../../../../service/log/model/extra/logdata/log-data';

@Component({
  templateUrl: './log-data-text-markdown-default.component.html',
  styleUrls: ['./log-data-text-markdown-default.component.css']
})
export class LogDataTextMarkdownDefaultComponent implements OnInit {

  @Input() logData: LogData;

  text: string;

  constructor() {
  }

  ngOnInit() {
    this.text = this.logData.data.text;
  }

}
