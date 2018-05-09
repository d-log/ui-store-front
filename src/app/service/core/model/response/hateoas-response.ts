import {Embedded} from './extra/embedded';
import {Page} from './extra/page';

export class HateoasResponse {
  _embedded: Embedded;
  page: Page;
  _links: any;
}
