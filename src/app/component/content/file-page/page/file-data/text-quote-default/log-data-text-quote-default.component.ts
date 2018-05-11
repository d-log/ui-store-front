import {Component, Input} from '@angular/core';
import {TextQuoteLogData} from '../../../../../../service/core/file/model/extra/data/log/extra/log-data/type/text-quote/text-quote-log-data';

@Component({
  selector: 'app-log-data-text-quote-default',
  templateUrl: './log-data-text-quote-default.component.html',
  styleUrls: ['./log-data-text-quote-default.component.css']
})
export class LogDataTextQuoteDefaultComponent {
  @Input() data: TextQuoteLogData;
}
