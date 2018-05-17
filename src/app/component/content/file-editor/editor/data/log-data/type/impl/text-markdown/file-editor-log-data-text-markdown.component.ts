import {Component, Input} from '@angular/core';
import {TextMarkdownLogData} from '../../../../../../../../../service/core/file/model/extra/data/log/extra/log-data/type/text-markdown/text-markdown-log-data';

@Component({
  selector: 'app-file-editor-log-data-text-markdown',
  templateUrl: './file-editor-log-data-text-markdown.component.html',
  styleUrls: ['./file-editor-log-data-text-markdown.component.css']
})
export class FileEditorLogDataTextMarkdownComponent {
  @Input() textMarkdownLogData: TextMarkdownLogData;
}
