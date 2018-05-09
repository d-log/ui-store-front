import {LogData} from '../log/extra/log-data';
import {Organization} from '../log/extra/organization';

export class LogDirectoryFileData {
  logDatas: LogData[];
  organization: Organization;

  logFileIDs: String[];
  childLogDirectoryFileIDs: String[];
  logDirectoryTypeOverride: any;
}
