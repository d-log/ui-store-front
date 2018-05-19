import {Component, Input} from '@angular/core';
import {ImageQuoteLogContent} from '../../../../../../../../service/core/file/model/extra/data/log/extra/log-data/type/image-quote/image-quote-log-content';

@Component({
  selector: 'app-log-editor-content-image-quote',
  templateUrl: './log-editor-content-image-quote.component.html',
  styleUrls: ['./log-editor-content-image-quote.component.css']
})
export class LogEditorContentImageQuoteComponent {
  @Input() imageQuoteLogData: ImageQuoteLogContent;
}
