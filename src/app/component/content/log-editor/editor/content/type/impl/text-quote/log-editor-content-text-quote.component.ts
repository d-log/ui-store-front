import {Component, Input} from '@angular/core';
import {TextQuoteLogContent} from '../../../../../../../../service/core/model/data/log/extra/log-content/type/text-quote/text-quote-log-content';

@Component({
  selector: 'app-log-editor-content-text-quote',
  templateUrl: './log-editor-content-text-quote.component.html',
  styleUrls: ['./log-editor-content-text-quote.component.css']
})
export class LogEditorContentTextQuoteComponent {
  @Input() textQuoteLogData: TextQuoteLogContent;
}
