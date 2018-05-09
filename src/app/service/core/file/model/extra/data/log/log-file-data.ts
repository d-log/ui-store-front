import {Organization} from './extra/organization';
import {FileModel} from '../../../file-model';

export class LogFileData {
  logType: string;
  organization: Organization;
  logDatas: any[];

  // LogTypes
  parentLogDirectoryFileDatas: FileModel[];
  tagFileDatas: FileModel[];
  numLogDatas: number;
}
