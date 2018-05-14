import {Component, Input} from '@angular/core';
import {TextCodeLogData} from '../../../../../../../../service/core/file/model/extra/data/log/extra/log-data/type/text-code/text-code-log-data';

@Component({
  selector: 'app-file-create-log-data-text-code',
  templateUrl: './file-editor-log-data-text-code.component.html',
  styleUrls: ['./file-editor-log-data-text-code.component.css']
})
export class FileEditorLogDataTextCodeComponent {
  @Input() textCodeLogData: TextCodeLogData;
}
