import {CommentSectionLogContent} from './type/_noncontent/comment-section-log-content';
import {HeaderSectionLogContent} from './type/_noncontent/header-section-log-content';
import {ImageInternalLogContent} from './type/image-internal/image-internal-log-content';
import {ImageQuoteLogContent} from './type/image-quote/image-quote-log-content';
import {TextCodeLogContent} from './type/text-code/text-code-log-content';
import {TextMarkdownLogContent} from './type/text-markdown/text-markdown-log-content';
import {TextPlainLogContent} from './type/text-plain/text-plain-log-content';
import {TextQuoteLogContent} from './type/text-quote/text-quote-log-content';
import {TwitterTweetLogContent} from './type/twitter-tweet/twitter-tweet-log-content';
import {VideoYoutubeLogContent} from './type/video-youtube/video-youtube-log-content';

export class LogContent {
  logContentType: string;
  css: { [directive: string]: string };
  data: any | CommentSectionLogContent | HeaderSectionLogContent | ImageInternalLogContent | ImageQuoteLogContent | TextCodeLogContent | TextMarkdownLogContent | TextPlainLogContent | TextQuoteLogContent | TwitterTweetLogContent | VideoYoutubeLogContent;

  constructor(logContentType: string, css: { [directive: string]: string }, data: any | CommentSectionLogContent | HeaderSectionLogContent | ImageInternalLogContent | ImageQuoteLogContent | TextCodeLogContent | TextMarkdownLogContent | TextPlainLogContent | TextQuoteLogContent | TwitterTweetLogContent | VideoYoutubeLogContent) {
    this.logContentType = logContentType;
    this.css = css;
    this.data = data;
  }
}
