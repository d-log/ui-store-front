import {Component, Input} from '@angular/core';
import {TextPlainLogData} from '../../../../../../../../../service/core/file/model/extra/data/log/extra/log-data/type/text-plain/text-plain-log-data';

@Component({
  selector: 'app-file-editor-log-data-text-plain',
  templateUrl: './file-editor-log-data-text-plain.component.html',
  styleUrls: ['./file-editor-log-data-text-plain.component.css']
})
export class FileEditorLogDataTextPlainComponent {
  @Input() textPlainLogData: TextPlainLogData;
}
