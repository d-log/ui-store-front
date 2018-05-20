import {Pageable} from '../../model/request/pageable';
import {Sort} from '../../model/request/sort';

export class TagGetterRequest {
  createdBefore: number; // unix milliseconds
  metadataNameLike: string;
  pageable: Pageable;
  sorts: Sort[];
}
