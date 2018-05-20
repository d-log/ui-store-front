import {CommentSectionLogContent} from './type/_section/comment-section-log-content';
import {HeaderSectionLogContent} from './type/_section/header-section-log-content';
import {ImageInternalLogContent} from './type/image-internal/image-internal-log-content';
import {ImageQuoteLogContent} from './type/image-quote/image-quote-log-content';
import {TextCodeLogContent} from './type/text-code/text-code-log-content';
import {TextMarkdownLogContent} from './type/text-markdown/text-markdown-log-content';
import {TextPlainLogContent} from './type/text-plain/text-plain-log-content';
import {TextQuoteLogContent} from './type/text-quote/text-quote-log-content';
import {TwitterTweetLogContent} from './type/twitter-tweet/twitter-tweet-log-content';
import {VideoYoutubeLogContent} from './type/video-youtube/video-youtube-log-content';
import {ChildLogsSectionLogContent} from './type/_section/child-logs-section-log-content';

export class LogContent {
  logContentType: string;
  css: { [directive: string]: string };
  data: any | ChildLogsSectionLogContent | CommentSectionLogContent | HeaderSectionLogContent | ImageInternalLogContent | ImageQuoteLogContent | TextCodeLogContent | TextMarkdownLogContent | TextPlainLogContent | TextQuoteLogContent | TwitterTweetLogContent | VideoYoutubeLogContent;

  constructor(logContentType: string, css: { [directive: string]: string }, data: any | ChildLogsSectionLogContent | CommentSectionLogContent | HeaderSectionLogContent | ImageInternalLogContent | ImageQuoteLogContent | TextCodeLogContent | TextMarkdownLogContent | TextPlainLogContent | TextQuoteLogContent | TwitterTweetLogContent | VideoYoutubeLogContent) {
    this.logContentType = logContentType;
    this.css = css;
    this.data = data;
  }

  static defaultHeader() {
    return new LogContent(
      'HeaderSectionLogContent',
      this.generateDefaultCSS(),
      new HeaderSectionLogContent()
    );
  }

  static defaultComment() {
    return new LogContent(
      'CommentSectionLogContent',
      this.generateDefaultCSS(),
      new CommentSectionLogContent()
    );
  }

  static defaultChildLogs() {
    return new LogContent(
      'ChildLogsSectionLogContent',
      this.generateDefaultCSS(),
      new ChildLogsSectionLogContent()
    );
  }

  static generateDefaultCSS() {
    return {
      'margin-top': '20px',
      'margin-left': 'auto',
      'margin-right': 'auto',
      'max-width': '800px'
    };
  }
}
