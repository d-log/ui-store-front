import {ImageInternalLogData} from '../image-internal/image-internal-log-data';
import {TextQuoteLogData} from '../text-quote/text-quote-log-data';

export class ImageQuoteLogData {
  imageContainsQuote: boolean;
  imageInternalLogData: ImageInternalLogData;
  textQuoteLogData: TextQuoteLogData;
}
