import {Component, EventEmitter, Input, Output} from '@angular/core';
import {LogFileData} from '../../../../../../../service/core/file/model/extra/data/log/log-file-data';
import {TextQuoteLogData} from '../../../../../../../service/core/file/model/extra/data/log/extra/log-data/type/text-quote/text-quote-log-data';
import {TextCodeLogData} from '../../../../../../../service/core/file/model/extra/data/log/extra/log-data/type/text-code/text-code-log-data';
import {LogData} from '../../../../../../../service/core/file/model/extra/data/log/extra/log-data/log-data';
import {TextPlainLogData} from '../../../../../../../service/core/file/model/extra/data/log/extra/log-data/type/text-plain/text-plain-log-data';
import {TextMarkdownLogData} from '../../../../../../../service/core/file/model/extra/data/log/extra/log-data/type/text-markdown/text-markdown-log-data';

@Component({
  selector: 'app-file-create-log-data-helper-text',
  templateUrl: './file-create-log-data-helper-text.component.html',
  styleUrls: ['./file-create-log-data-helper-text.component.css']
})
export class FileCreateLogDataHelperTextComponent {
  @Input() data: LogFileData;
  @Output() closeHelper = new EventEmitter<boolean>();

  onCloseHelper() {
    this.closeHelper.emit(true);
  }

  addTextCode() {
    const textCodeLogData = new TextCodeLogData();
    textCodeLogData.code = 'public static void main(String args[]) {\n    System.out.println("Hello World");\n}';
    textCodeLogData.language = 'java';
    textCodeLogData.showLineNumber = true;
    textCodeLogData.maxHeight = -1;
    textCodeLogData.startingLineNumber = 1;
    this.data.logDatas.push(new LogData('TextCodeLogData', this.generateDefaultCSS(), textCodeLogData));
  }

  addTextMarkdown() {
    const textMarkdownLogData = new TextMarkdownLogData();
    textMarkdownLogData.text = 'something';
    this.data.logDatas.push(new LogData('TextMarkdownLogData', this.generateDefaultCSS(), textMarkdownLogData));
  }

  addTextPlain() {
    const textPlainLogData = new TextPlainLogData();
    textPlainLogData.text = 'test text plain';
    this.data.logDatas.push(new LogData('TextPlainLogData', this.generateDefaultCSS(), textPlainLogData));
  }

  addTextQuote() {
    const textQuoteLogData = new TextQuoteLogData();
    textQuoteLogData.quote = 'I am the way, the truth and life';
    textQuoteLogData.sourceName = 'Jesus Christ';
    this.data.logDatas.push(new LogData('TextQuoteLogData', this.generateDefaultCSS(), textQuoteLogData));
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
