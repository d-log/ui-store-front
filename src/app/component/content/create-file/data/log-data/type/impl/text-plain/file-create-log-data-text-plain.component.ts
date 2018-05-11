import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TextPlainLogData} from '../../../../../../../../service/core/file/model/extra/data/log/extra/log-data/type/text-plain/text-plain-log-data';

@Component({
  selector: 'app-file-create-log-data-text-plain',
  templateUrl: './file-create-log-data-text-plain.component.html',
  styleUrls: ['./file-create-log-data-text-plain.component.css']
})
export class FileCreateLogDataTextPlainComponent {

  @Input() textPlainLogData: TextPlainLogData;
  @Output() updateFileModel = new EventEmitter<boolean>();

  textAreaChanged(event) {
    const textAreaElement: HTMLTextAreaElement = <HTMLTextAreaElement>event.srcElement;
    this.textPlainLogData.text = textAreaElement.value;
    this.updateFileModel.emit(true);
  }
}
