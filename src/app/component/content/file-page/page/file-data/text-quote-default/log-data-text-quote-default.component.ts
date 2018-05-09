import {Component, Input, OnInit} from '@angular/core';
import {LogData} from '../../../../../../service/core/file/model/extra/data/log/extra/log-data';

@Component({
  templateUrl: './log-data-text-quote-default.component.html',
  styleUrls: ['./log-data-text-quote-default.component.css']
})
export class LogDataTextQuoteDefaultComponent implements OnInit {

  @Input() logData: LogData;
  quote: string;
  formOfCommunication: string;
  sourceType: string;
  sourceName: string;

  constructor() {
  }

  ngOnInit() {
    const data = this.logData.data;
    this.quote = data.quote;
    this.formOfCommunication = data.formOfCommunication;
    this.sourceType = data.sourceType;
    this.sourceName = data.sourceName;
  }

}
