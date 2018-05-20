import {Metadata} from '../metadata';
import {ImageSource} from './extra/image-source';

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
