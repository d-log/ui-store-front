import {Component, Input} from '@angular/core';
import {TextMarkdownLogData} from '../../../../../../service/core/file/model/extra/data/log/extra/log-data/type/text-markdown/text-markdown-log-data';

@Component({
  selector: 'app-log-data-text-markdown-default',
  templateUrl: './log-data-text-markdown-default.component.html',
  styleUrls: ['./log-data-text-markdown-default.component.css']
})
export class LogDataTextMarkdownDefaultComponent {
  @Input() data: TextMarkdownLogData;
}
