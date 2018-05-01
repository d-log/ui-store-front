import {Pageable} from '../model/pageable';
import {LogType} from './model/extra/data/logdata/log-type';

export class GetterRequest {
  millisecondThreshold: number;
  pageable: Pageable;
  logType: LogType;
  searchString: string;
  directoryID: string;
  tagID: string;
}
