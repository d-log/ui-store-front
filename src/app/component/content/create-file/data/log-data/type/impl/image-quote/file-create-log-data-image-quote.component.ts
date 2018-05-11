import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ImageQuoteLogData} from '../../../../../../../../service/core/file/model/extra/data/log/extra/log-data/type/image-quote/image-quote-log-data';

@Component({
  selector: 'app-file-create-log-data-image-quote',
  templateUrl: './file-create-log-data-image-quote.component.html',
  styleUrls: ['./file-create-log-data-image-quote.component.css']
})
export class FileCreateLogDataImageQuoteComponent {

  @Input() imageQuoteLogData: ImageQuoteLogData;
  @Output() updateFileModel = new EventEmitter<boolean>();

  textAreaChanged(event) {
    const textAreaElement: HTMLTextAreaElement = <HTMLTextAreaElement>event.srcElement;
    // this.textPlainLogData.text = textAreaElement.value;
    this.updateFileModel.emit(true);
  }
}
