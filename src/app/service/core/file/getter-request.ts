import {Pageable} from '../model/pageable';
import {LogType} from './model/extra/data/logdata/log-type';
import {LogDirectoryType} from './model/extra/data/log-directory-data/log-directory-type';
import {FileType} from './model/extra/file-type';
import {Sort} from '../model/sort';

export class GetterRequest {
  fileTypes: FileType[];

  logType: LogType;
  logDirectoryType: LogDirectoryType;

  millisecondThreshold: number;
  searchString: string;
  directoryID: string;
  tagID: string;

  pageable: Pageable;
  sorts: Sort[];
}
