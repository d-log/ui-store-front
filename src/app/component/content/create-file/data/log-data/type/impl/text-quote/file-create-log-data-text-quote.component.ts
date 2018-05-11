import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TextQuoteLogData} from '../../../../../../../../service/core/file/model/extra/data/log/extra/log-data/type/text-quote/text-quote-log-data';

@Component({
  selector: 'app-file-create-log-data-text-quote',
  templateUrl: './file-create-log-data-text-quote.component.html',
  styleUrls: ['./file-create-log-data-text-quote.component.css']
})
export class FileCreateLogDataTextQuoteComponent {

  @Input() textQuoteLogData: TextQuoteLogData;
  @Output() updateFileModel = new EventEmitter<boolean>();

  textAreaChanged(event) {
    const textAreaElement: HTMLTextAreaElement = <HTMLTextAreaElement>event.srcElement;
    this.textQuoteLogData.quote = textAreaElement.value;
    this.updateFileModel.emit(true);
  }
}
