import {ImageMetaData} from './pojo/image/image-meta-data';
import {LogData} from '../log-data';

export class ImageInternalLogData extends LogData {
  imageID: string;
  imageURL: string;
  imageMetaData: ImageMetaData;
}
