import {FileType} from '../../file/model/extra/file-type';
import {LogType} from '../../file/model/extra/data/log/extra/log-type';
import {LogDirectoryType} from '../../file/model/extra/data/log-directory/extra/log-directory-type';
import {Pageable} from './pageable';
import {Sort} from './sort';

export class GetterRequest {
  fileTypes: FileType[];

  logType: LogType;
  logDirectoryType: LogDirectoryType;

  millisecondThreshold: number;
  metadataNameRegex: string;
  searchString: string;
  directoryID: string;
  tagID: string;

  pageable: Pageable;
  sorts: Sort[];
}
