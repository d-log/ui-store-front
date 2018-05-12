import {Component, Input} from '@angular/core';
import {TextMarkdownLogData} from '../../../../../../../../service/core/file/model/extra/data/log/extra/log-data/type/text-markdown/text-markdown-log-data';

@Component({
  selector: 'app-file-create-log-data-text-markdown',
  templateUrl: './file-create-log-data-text-markdown.component.html',
  styleUrls: ['./file-create-log-data-text-markdown.component.css']
})
export class FileCreateLogDataTextMarkdownComponent {
  @Input() textMarkdownLogData: TextMarkdownLogData;
}
