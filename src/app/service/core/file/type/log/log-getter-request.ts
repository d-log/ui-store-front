import {LogDisplayType} from '../../model/extra/data/log/extra/log-display-type';
import {Pageable} from '../../../model/request/pageable';
import {Sort} from '../../../model/request/sort';

export class LogGetterRequest {
  logDisplayType: LogDisplayType;

  millisecondThreshold: number;
  metadataNameRegex: string;
  searchString: string;
  parentLogID: string;
  tagID: string;

  pageable: Pageable;
  sorts: Sort[];
}
