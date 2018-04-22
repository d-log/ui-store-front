/**
 * core-service has been set up to return either `item` or `collection`
 */
import {Page} from './page';

export class Embedded {
  collection: any[];
  item: any;

  page: Page;
}
