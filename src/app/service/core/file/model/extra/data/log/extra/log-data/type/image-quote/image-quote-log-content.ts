import {ImageInternalLogContent} from '../image-internal/image-internal-log-content';
import {TextQuoteLogContent} from '../text-quote/text-quote-log-content';

export class ImageQuoteLogContent {
  imageContainsQuote: boolean;
  imageInternalLogData: ImageInternalLogContent;
  textQuoteLogData: TextQuoteLogContent;
}
