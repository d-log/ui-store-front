import {Component, Input} from '@angular/core';
import {TextQuoteLogContent} from '../../../../../../service/core/file/model/extra/data/log/extra/log-content/type/text-quote/text-quote-log-content';

@Component({
  selector: 'app-log-content-text-quote-default',
  templateUrl: './log-content-text-quote-default.component.html',
  styleUrls: ['./log-content-text-quote-default.component.css']
})
export class LogContentTextQuoteDefaultComponent {
  @Input() data: TextQuoteLogContent;
}
