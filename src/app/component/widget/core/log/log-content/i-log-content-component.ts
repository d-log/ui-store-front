import {VideoYoutubeLogContent} from '../../../../../service/core/file/model/extra/data/log/extra/log-data/type/video-youtube/video-youtube-log-content';
import {TextQuoteLogContent} from '../../../../../service/core/file/model/extra/data/log/extra/log-data/type/text-quote/text-quote-log-content';
import {TextPlainLogContent} from '../../../../../service/core/file/model/extra/data/log/extra/log-data/type/text-plain/text-plain-log-content';
import {TextMarkdownLogContent} from '../../../../../service/core/file/model/extra/data/log/extra/log-data/type/text-markdown/text-markdown-log-content';
import {TextCodeLogContent} from '../../../../../service/core/file/model/extra/data/log/extra/log-data/type/text-code/text-code-log-content';
import {ImageInternalLogContent} from '../../../../../service/core/file/model/extra/data/log/extra/log-data/type/image-internal/image-internal-log-content';
import {ImageQuoteLogContent} from '../../../../../service/core/file/model/extra/data/log/extra/log-data/type/image-quote/image-quote-log-content';

export interface ILogContentComponent {
  data: VideoYoutubeLogContent | TextQuoteLogContent | TextPlainLogContent | TextMarkdownLogContent | TextCodeLogContent | ImageInternalLogContent | ImageQuoteLogContent;
}
