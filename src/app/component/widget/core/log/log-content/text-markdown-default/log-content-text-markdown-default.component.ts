import {Component, Input} from '@angular/core';
import {TextMarkdownLogContent} from '../../../../../../service/core/file/model/extra/data/log/extra/log-content/type/text-markdown/text-markdown-log-content';

@Component({
  selector: 'app-log-content-text-markdown-default',
  templateUrl: './log-content-text-markdown-default.component.html',
  styleUrls: ['./log-content-text-markdown-default.component.css']
})
export class LogContentTextMarkdownDefaultComponent {
  @Input() data: TextMarkdownLogContent;
}
