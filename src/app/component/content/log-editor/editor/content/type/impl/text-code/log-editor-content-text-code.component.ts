import {Component, Input} from '@angular/core';
import {TextCodeLogContent} from '../../../../../../../../service/core/file/model/extra/data/log/extra/log-data/type/text-code/text-code-log-content';

@Component({
  selector: 'app-log-editor-content-text-code',
  templateUrl: './log-editor-content-text-code.component.html',
  styleUrls: ['./log-editor-content-text-code.component.css']
})
export class LogEditorContentTextCodeComponent {
  @Input() textCodeLogData: TextCodeLogContent;
}
