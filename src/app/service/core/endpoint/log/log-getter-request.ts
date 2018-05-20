import {Sort} from '../../model/request/sort';
import {Pageable} from '../../model/request/pageable';
import {LogDisplayType} from '../../model/data/log/extra/log-display-type';

export class LogGetterRequest {
  logDisplayType: LogDisplayType;

  searchString: string;

  createdBefore: number; // unix milliseconds
  metadataNameLike: string;

  parentLogID: string;
  tagID: string;

  pageable: Pageable;
  sorts: Sort[];
}
