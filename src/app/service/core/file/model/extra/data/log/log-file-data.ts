import {Organization} from './extra/organization';
import {FileModel} from '../../../file-model';
import {LogTypeOverride} from './extra/log-type-override/log-type-override';

export class LogFileData {
  logType: string;
  organization: Organization;
  logDatas: any[];
  logTypeOverride: LogTypeOverride;

  // LogTypes
  parentLogDirectoryFileDatas: FileModel[];
  tagFileDatas: FileModel[];
  numLogDatas: number;
}
