import {Component, Input} from '@angular/core';
import {ImageQuoteLogData} from '../../../../../../../../../service/core/file/model/extra/data/log/extra/log-data/type/image-quote/image-quote-log-data';

@Component({
  selector: 'app-file-editor-log-data-image-quote',
  templateUrl: './file-editor-log-data-image-quote.component.html',
  styleUrls: ['./file-editor-log-data-image-quote.component.css']
})
export class FileEditorLogDataImageQuoteComponent {
  @Input() imageQuoteLogData: ImageQuoteLogData;
}
