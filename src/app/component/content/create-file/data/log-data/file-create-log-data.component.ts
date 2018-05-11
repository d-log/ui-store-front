import {Component, EventEmitter, Input, Output} from '@angular/core';
import {LogData} from '../../../../../service/core/file/model/extra/data/log/extra/log-data/log-data';
import {TextCodeLogData} from '../../../../../service/core/file/model/extra/data/log/extra/log-data/type/text-code/text-code-log-data';
import {TextPlainLogData} from '../../../../../service/core/file/model/extra/data/log/extra/log-data/type/text-plain/text-plain-log-data';
import {VideoYoutubeLogData} from '../../../../../service/core/file/model/extra/data/log/extra/log-data/type/video-youtube/video-youtube-log-data';
import {TextMarkdownLogData} from '../../../../../service/core/file/model/extra/data/log/extra/log-data/type/text-markdown/text-markdown-log-data';
import {TextQuoteLogData} from '../../../../../service/core/file/model/extra/data/log/extra/log-data/type/text-quote/text-quote-log-data';

@Component({
  selector: 'app-file-create-log-data',
  templateUrl: './file-create-log-data.component.html',
  styleUrls: ['./file-create-log-data.component.css']
})
export class FileCreateLogDataComponent {
  @Output() updateFileModel = new EventEmitter<boolean>();
  @Input() logDatas: LogData[];

  addLogData() {
    const textPlainLogData = new TextPlainLogData();
    textPlainLogData.text = '';
    this.logDatas.push(new LogData('TextPlainLogData', textPlainLogData));

    const textCodeLogData = new TextCodeLogData();
    textCodeLogData.code = 'some code here';
    textCodeLogData.language = 'java';
    textCodeLogData.showLineNumber = true;
    textCodeLogData.maxHeight = -1;
    textCodeLogData.startingLineNumber = 1;
    this.logDatas.push(new LogData('TextCodeLogData', textCodeLogData));

    const videoYouTubeLogData = new VideoYoutubeLogData();
    videoYouTubeLogData.videoID = 'qVgOTbx4RW8';
    this.logDatas.push(new LogData('VideoYouTubeLogData', videoYouTubeLogData));

    const textMarkdownLogData = new TextMarkdownLogData();
    textMarkdownLogData.text = 'something';
    this.logDatas.push(new LogData('TextMarkdownLogData', textMarkdownLogData));

    const textQuoteLogData = new TextQuoteLogData();
    textQuoteLogData.quote = 'quote here';
    this.logDatas.push(new LogData('TextQuoteLogData', textQuoteLogData));

    this.onUpdateFileModel();
  }

  onUpdateFileModel() {
    this.updateFileModel.emit(true);
  }
}
