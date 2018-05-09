import {ImageSource} from './extra/image-source';

export class ImageFileData {
  imageURL: string;
  extension: string;
  width: number;
  height: number;
  heightDividedByWidth: number;
  source: ImageSource;
}
