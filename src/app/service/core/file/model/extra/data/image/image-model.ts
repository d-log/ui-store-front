import {ImageSource} from './extra/image-source';
import {Metadata} from '../../metadata';

export class ImageModel {
  id: string;
  metadata: Metadata;

  imageURL: string;
  extension: string;
  width: number;
  height: number;
  heightDividedByWidth: number;
  source: ImageSource;
}
