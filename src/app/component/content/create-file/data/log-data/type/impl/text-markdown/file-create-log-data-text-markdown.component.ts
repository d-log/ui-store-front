import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TextMarkdownLogData} from '../../../../../../../../service/core/file/model/extra/data/log/extra/log-data/type/text-markdown/text-markdown-log-data';

@Component({
  selector: 'app-file-create-log-data-text-markdown',
  templateUrl: './file-create-log-data-text-markdown.component.html',
  styleUrls: ['./file-create-log-data-text-markdown.component.css']
})
export class FileCreateLogDataTextMarkdownComponent {

  @Input() textMarkdownLogData: TextMarkdownLogData;
  @Output() updateFileModel = new EventEmitter<boolean>();

  textAreaChanged(event) {
    const textAreaElement: HTMLTextAreaElement = <HTMLTextAreaElement>event.srcElement;
    this.textMarkdownLogData.text = textAreaElement.value;
    this.updateFileModel.emit(true);
  }
}
