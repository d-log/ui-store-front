import {Component, EventEmitter, Input, Output} from '@angular/core';
import {LogModel} from '../../../../../../../service/core/file/model/extra/data/log/log-model';
import {TextCodeLogContent} from '../../../../../../../service/core/file/model/extra/data/log/extra/log-data/type/text-code/text-code-log-content';
import {LogContent} from '../../../../../../../service/core/file/model/extra/data/log/extra/log-data/log-content';
import {TextMarkdownLogContent} from '../../../../../../../service/core/file/model/extra/data/log/extra/log-data/type/text-markdown/text-markdown-log-content';
import {TextPlainLogContent} from '../../../../../../../service/core/file/model/extra/data/log/extra/log-data/type/text-plain/text-plain-log-content';
import {TextQuoteLogContent} from '../../../../../../../service/core/file/model/extra/data/log/extra/log-data/type/text-quote/text-quote-log-content';

@Component({
  selector: 'app-log-editor-content-helper-text',
  templateUrl: './log-editor-content-helper-text.component.html',
  styleUrls: ['./log-editor-content-helper-text.component.css']
})
export class LogEditorContentHelperTextComponent {
  @Input() data: LogModel;
  @Output() closeHelper = new EventEmitter<boolean>();

  onCloseHelper() {
    this.closeHelper.emit(true);
  }

  addTextCode() {
    const textCodeLogData = new TextCodeLogContent();
    textCodeLogData.text = 'public static void main(String args[]) {\n    System.out.println("Hello World");\n}';
    textCodeLogData.language = 'java';
    textCodeLogData.showLineNumber = true;
    textCodeLogData.maxHeight = -1;
    textCodeLogData.startingLineNumber = 1;
    this.data.logContents.push(new LogContent('TextCodeLogContent', this.generateDefaultCSS(), textCodeLogData));
  }

  addTextMarkdown() {
    const textMarkdownLogData = new TextMarkdownLogContent();
    textMarkdownLogData.text = 'something';
    this.data.logContents.push(new LogContent('TextMarkdownLogContent', this.generateDefaultCSS(), textMarkdownLogData));
  }

  addTextPlain() {
    const textPlainLogData = new TextPlainLogContent();
    textPlainLogData.text = 'test text plain';
    this.data.logContents.push(new LogContent('TextPlainLogContent', this.generateDefaultCSS(), textPlainLogData));
  }

  addTextQuote() {
    const textQuoteLogData = new TextQuoteLogContent();
    textQuoteLogData.text = 'I am the way, the truth and life';
    textQuoteLogData.sourceName = 'Jesus Christ';
    this.data.logContents.push(new LogContent('TextQuoteLogContent', this.generateDefaultCSS(), textQuoteLogData));
  }

  generateDefaultCSS() {
    return {
      'margin-top': '20px',
      'margin-left': 'auto',
      'margin-right': 'auto',
      'max-width': '800px'
    };
  }
}
