import {Component, Input} from '@angular/core';
import {TextQuoteLogData} from '../../../../../../../../service/core/file/model/extra/data/log/extra/log-data/type/text-quote/text-quote-log-data';

@Component({
  selector: 'app-file-editor-log-data-text-quote',
  templateUrl: './file-editor-log-data-text-quote.component.html',
  styleUrls: ['./file-editor-log-data-text-quote.component.css']
})
export class FileEditorLogDataTextQuoteComponent {
  @Input() textQuoteLogData: TextQuoteLogData;
}
