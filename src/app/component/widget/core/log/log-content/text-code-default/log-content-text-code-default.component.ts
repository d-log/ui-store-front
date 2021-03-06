import {Component, Input} from '@angular/core';
import {TextCodeLogContent} from '../../../../../../service/core/model/data/log/extra/log-content/type/text-code/text-code-log-content';

@Component({
  selector: 'app-log-content-text-code-default',
  templateUrl: './log-content-text-code-default.component.html',
  styleUrls: ['./log-content-text-code-default.component.css']
})
export class LogContentTextCodeDefaultComponent {
  @Input() data: TextCodeLogContent;

  // this allows template to use JSON.stringify()
  JSON: JSON;

  constructor() {
    this.JSON = JSON;
  }
}
