import {Component, Input} from '@angular/core';
import {TextCodeLogData} from '../../../../../../service/core/file/model/extra/data/log/extra/log-data/type/text-code/text-code-log-data';

@Component({
  selector: 'app-log-data-text-code-default',
  templateUrl: './log-data-text-code-default.component.html',
  styleUrls: ['./log-data-text-code-default.component.css']
})
export class LogDataTextCodeDefaultComponent {
  @Input() data: TextCodeLogData;

  // this allows template to use JSON.stringify()
  JSON: JSON;

  constructor() {
    this.JSON = JSON;
  }
}
