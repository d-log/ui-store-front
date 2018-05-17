import {VideoYoutubeLogData} from '../../../../../service/core/file/model/extra/data/log/extra/log-data/type/video-youtube/video-youtube-log-data';
import {TextQuoteLogData} from '../../../../../service/core/file/model/extra/data/log/extra/log-data/type/text-quote/text-quote-log-data';
import {TextPlainLogData} from '../../../../../service/core/file/model/extra/data/log/extra/log-data/type/text-plain/text-plain-log-data';
import {TextMarkdownLogData} from '../../../../../service/core/file/model/extra/data/log/extra/log-data/type/text-markdown/text-markdown-log-data';
import {TextCodeLogData} from '../../../../../service/core/file/model/extra/data/log/extra/log-data/type/text-code/text-code-log-data';
import {ImageInternalLogData} from '../../../../../service/core/file/model/extra/data/log/extra/log-data/type/image-internal/image-internal-log-data';
import {ImageQuoteLogData} from '../../../../../service/core/file/model/extra/data/log/extra/log-data/type/image-quote/image-quote-log-data';

export interface ILogDataComponent {
  data: VideoYoutubeLogData | TextQuoteLogData | TextPlainLogData | TextMarkdownLogData | TextCodeLogData | ImageInternalLogData | ImageQuoteLogData;
}
