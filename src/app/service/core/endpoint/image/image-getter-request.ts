import {Pageable} from '../../model/request/pageable';
import {Sort} from '../../model/request/sort';

export class ImageGetterRequest {
  createdBefore: number; // unix milliseconds
  pageable: Pageable;
  sorts: Sort[];
}
