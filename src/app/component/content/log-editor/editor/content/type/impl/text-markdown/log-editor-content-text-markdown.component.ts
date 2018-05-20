import {Component, Input} from '@angular/core';
import {TextMarkdownLogContent} from '../../../../../../../../service/core/model/data/log/extra/log-content/type/text-markdown/text-markdown-log-content';

@Component({
  selector: 'app-log-editor-content-text-markdown',
  templateUrl: './log-editor-content-text-markdown.component.html',
  styleUrls: ['./log-editor-content-text-markdown.component.css']
})
export class LogEditorContentTextMarkdownComponent {
  @Input() textMarkdownLogData: TextMarkdownLogContent;
}
