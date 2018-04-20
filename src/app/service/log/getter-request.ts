import {LogType} from './model/extra/log-type';
import {Pageable} from '../model/pageable';

export class GetterRequest {
  millisecondThreshold: number;
  pageable: Pageable;
  logType: LogType;
  searchString: string;
}
