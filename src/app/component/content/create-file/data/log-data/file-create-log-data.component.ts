import {Component, EventEmitter, Input, Output} from '@angular/core';
import {LogData} from '../../../../../service/core/file/model/extra/data/log/extra/log-data/log-data';
import {TextCodeLogData} from '../../../../../service/core/file/model/extra/data/log/extra/log-data/type/text-code/text-code-log-data';
import {TextPlainLogData} from '../../../../../service/core/file/model/extra/data/log/extra/log-data/type/text-plain/text-plain-log-data';
import {VideoYoutubeLogData} from '../../../../../service/core/file/model/extra/data/log/extra/log-data/type/video-youtube/video-youtube-log-data';
import {TextMarkdownLogData} from '../../../../../service/core/file/model/extra/data/log/extra/log-data/type/text-markdown/text-markdown-log-data';
import {TextQuoteLogData} from '../../../../../service/core/file/model/extra/data/log/extra/log-data/type/text-quote/text-quote-log-data';
import {ImageInternalLogData} from '../../../../../service/core/file/model/extra/data/log/extra/log-data/type/image-internal/image-internal-log-data';
import {ImageFileData} from '../../../../../service/core/file/model/extra/data/image/image-file-data';
import {HeaderSectionLogData} from '../../../../../service/core/file/model/extra/data/log/extra/log-data/type/_noncontent/header-section-log-data';
import {CommentSectionLogData} from '../../../../../service/core/file/model/extra/data/log/extra/log-data/type/_noncontent/comment-section-log-data';

@Component({
  selector: 'app-file-create-log-data',
  templateUrl: './file-create-log-data.component.html',
  styleUrls: ['./file-create-log-data.component.css']
})
export class FileCreateLogDataComponent {
  @Output() updateFileModel = new EventEmitter<boolean>();
  @Input() logDatas: LogData[];

  addHeaderSection() {
    const header = new HeaderSectionLogData();
    this.logDatas.push(new LogData('HeaderSectionLogData', {'margin-top': '20px'}, header));
  }

  addCommentSection() {
    const comment = new CommentSectionLogData();
    this.logDatas.push(new LogData('CommentSectionLogData', {'margin-top': '20px'}, comment));
  }

  addImageInternal() {
    const imageInternalLogData = new ImageInternalLogData();
    const imageFileData = new ImageFileData();
    imageFileData.imageURL = 'https://lightwidget.com/widgets/empty-photo.jpg';
    imageFileData.heightDividedByWidth = 1;
    imageInternalLogData.imageFileData = imageFileData;
    this.logDatas.push(new LogData('ImageInternalLogData', {'margin-top': '20px'}, imageInternalLogData));
  }

  addImageQuote() {
    alert('image quote not supported yet');
  }

  addTextCode() {
    const textCodeLogData = new TextCodeLogData();
    textCodeLogData.code = 'public static void main(String args[]) {\n    System.out.println("Hello World");\n}';
    textCodeLogData.language = 'java';
    textCodeLogData.showLineNumber = true;
    textCodeLogData.maxHeight = -1;
    textCodeLogData.startingLineNumber = 1;
    this.logDatas.push(new LogData('TextCodeLogData', {'margin-top': '20px'}, textCodeLogData));
  }

  addTextMarkdown() {
    const textMarkdownLogData = new TextMarkdownLogData();
    textMarkdownLogData.text = 'something';
    this.logDatas.push(new LogData('TextMarkdownLogData', null, textMarkdownLogData));
  }

  addTextPlain() {
    const textPlainLogData = new TextPlainLogData();
    textPlainLogData.text = 'test text plain';
    this.logDatas.push(new LogData('TextPlainLogData', {'margin-top': '20px'}, textPlainLogData));
  }

  addTextQuote() {
    const textQuoteLogData = new TextQuoteLogData();
    textQuoteLogData.quote = 'I am the way, the truth and life';
    textQuoteLogData.sourceName = 'Jesus Christ';
    this.logDatas.push(new LogData('TextQuoteLogData', {'margin-top': '20px'}, textQuoteLogData));
  }

  addVideoYouTube() {
    const videoYouTubeLogData = new VideoYoutubeLogData();
    videoYouTubeLogData.videoID = 'qVgOTbx4RW8';
    this.logDatas.push(new LogData('VideoYouTubeLogData', {'margin-top': '20px'}, videoYouTubeLogData));
  }

  deleteLogData(index: number) {
    this.logDatas.splice(index, 1);
  }
}
