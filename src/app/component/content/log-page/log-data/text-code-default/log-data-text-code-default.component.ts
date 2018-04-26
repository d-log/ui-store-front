import {AfterViewChecked, Component, Input, OnInit} from '@angular/core';
import {LogData} from '../../../../../service/log/model/extra/logdata/log-data';
declare var PR: any;

@Component({
  templateUrl: './log-data-text-code-default.component.html',
  styleUrls: ['./log-data-text-code-default.component.css']
})
export class LogDataTextCodeDefaultComponent implements OnInit, AfterViewChecked {

  @Input() logData: LogData;

  code: string; // code snippet
  language: string; // such as java, html, javascript
  startingLineNumber: number;
  maxHeight: string; // can either be 'auto' or (number-here)px

  constructor() {
  }

  ngOnInit() {
    this.code = this.logData.data.code;
    debugger;
    this.startingLineNumber = this.logData.data.startingLineNumber;
    this.language = this.logData.data.language;
    if (this.logData.data.maxHeight >= 0) {
      this.maxHeight = this.logData.data.maxHeight + 'px';
    } else {
      this.maxHeight = 'auto';
    }
  }

  ngAfterViewChecked() {
    // execute prettyprint after code has been rendered in document
    PR.prettyPrint();
  }
}
