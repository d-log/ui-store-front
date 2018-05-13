import {Component, Input, OnInit} from '@angular/core';
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
import {LogFileData} from '../../../../../service/core/file/model/extra/data/log/log-file-data';

@Component({
  selector: 'app-file-create-log-data',
  templateUrl: './file-create-log-data.component.html',
  styleUrls: ['./file-create-log-data.component.css']
})
export class FileCreateLogDataComponent implements OnInit {
  @Input() data: LogFileData;

  displayAddHeader: boolean;
  displayAddComment: boolean;

  constructor() {
    this.displayAddHeader = false;
    this.displayAddComment = false;
  }

  ngOnInit() {
    if (this.data.logDatas.filter((logData: LogData) => logData.logDataType === 'HeaderSectionLogData').length === 0) {
      this.displayAddHeader = true;
    }
    if (this.data.logDatas.filter((logData: LogData) => logData.logDataType === 'CommentSectionLogData').length === 0) {
      this.displayAddComment = true;
    }
  }


  addHeaderSection() {
    const header = new HeaderSectionLogData();
    this.data.logDatas.push(new LogData('HeaderSectionLogData', {'margin-top': '20px'}, header));
    this.displayAddHeader = false;
  }

  addCommentSection() {
    const comment = new CommentSectionLogData();
    this.data.logDatas.push(new LogData('CommentSectionLogData', {'margin-top': '20px'}, comment));
    this.displayAddComment = false;
  }

  addImageInternal() {
    const imageInternalLogData = new ImageInternalLogData();
    const imageFileData = new ImageFileData();
    imageFileData.imageURL = 'https://lightwidget.com/widgets/empty-photo.jpg';
    imageFileData.heightDividedByWidth = 1;
    imageInternalLogData.imageFileData = imageFileData;
    this.data.logDatas.push(new LogData('ImageInternalLogData', {'margin-top': '20px'}, imageInternalLogData));
  }

  addImageQuote() {
  }

  addTextCode() {
    const textCodeLogData = new TextCodeLogData();
    textCodeLogData.code = 'public static void main(String args[]) {\n    System.out.println("Hello World");\n}';
    textCodeLogData.language = 'java';
    textCodeLogData.showLineNumber = true;
    textCodeLogData.maxHeight = -1;
    textCodeLogData.startingLineNumber = 1;
    this.data.logDatas.push(new LogData('TextCodeLogData', {'margin-top': '20px'}, textCodeLogData));
  }

  addTextMarkdown() {
    const textMarkdownLogData = new TextMarkdownLogData();
    textMarkdownLogData.text = 'something';
    this.data.logDatas.push(new LogData('TextMarkdownLogData', null, textMarkdownLogData));
  }

  addTextPlain() {
    const textPlainLogData = new TextPlainLogData();
    textPlainLogData.text = 'test text plain';
    this.data.logDatas.push(new LogData('TextPlainLogData', {'margin-top': '20px'}, textPlainLogData));
  }

  addTextQuote() {
    const textQuoteLogData = new TextQuoteLogData();
    textQuoteLogData.quote = 'I am the way, the truth and life';
    textQuoteLogData.sourceName = 'Jesus Christ';
    this.data.logDatas.push(new LogData('TextQuoteLogData', {'margin-top': '20px'}, textQuoteLogData));
  }

  addVideoYouTube() {
    const videoYouTubeLogData = new VideoYoutubeLogData();
    videoYouTubeLogData.videoID = 'qVgOTbx4RW8';
    this.data.logDatas.push(new LogData('VideoYouTubeLogData', {'margin-top': '20px'}, videoYouTubeLogData));
  }

  deleteLogData(index: number) {
    const logDataType = this.data.logDatas[index].logDataType;

    if (logDataType === 'HeaderSectionLogData') {
      this.displayAddHeader = true;
    } else if (logDataType === 'CommentSectionLogData') {
      this.displayAddComment = true;
    }

    this.data.logDatas.splice(index, 1);
  }
}
