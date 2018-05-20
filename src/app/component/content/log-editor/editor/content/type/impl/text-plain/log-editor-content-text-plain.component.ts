import {Component, Input} from '@angular/core';
import {TextPlainLogContent} from '../../../../../../../../service/core/model/data/log/extra/log-content/type/text-plain/text-plain-log-content';

@Component({
  selector: 'app-log-editor-content-text-plain',
  templateUrl: './log-editor-content-text-plain.component.html',
  styleUrls: ['./log-editor-content-text-plain.component.css']
})
export class LogEditorContentTextPlainComponent {
  @Input() textPlainLogData: TextPlainLogContent;
}
