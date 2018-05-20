import {ImageQuoteLogContent} from '../../../../../service/core/model/data/log/extra/log-content/type/image-quote/image-quote-log-content';
import {ImageInternalLogContent} from '../../../../../service/core/model/data/log/extra/log-content/type/image-internal/image-internal-log-content';
import {TextCodeLogContent} from '../../../../../service/core/model/data/log/extra/log-content/type/text-code/text-code-log-content';
import {TextMarkdownLogContent} from '../../../../../service/core/model/data/log/extra/log-content/type/text-markdown/text-markdown-log-content';
import {TextPlainLogContent} from '../../../../../service/core/model/data/log/extra/log-content/type/text-plain/text-plain-log-content';
import {TextQuoteLogContent} from '../../../../../service/core/model/data/log/extra/log-content/type/text-quote/text-quote-log-content';
import {VideoYoutubeLogContent} from '../../../../../service/core/model/data/log/extra/log-content/type/video-youtube/video-youtube-log-content';

export interface ILogContentComponent {
  data: VideoYoutubeLogContent | TextQuoteLogContent | TextPlainLogContent | TextMarkdownLogContent | TextCodeLogContent | ImageInternalLogContent | ImageQuoteLogContent;
}
