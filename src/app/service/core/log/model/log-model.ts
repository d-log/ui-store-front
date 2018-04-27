import {LogData} from './extra/logdata/log-data';
import {LogOrganization} from './extra/log-organization';
import {MetaData} from './extra/meta-data';
import {DirectoryModel} from '../../directory/model/directory-model';
import {TagModel} from '../../tag/model/tag-model';

export class LogModel {
  id: string;
  metadata: MetaData;
  logType: string; // DEFAULT, TILE, PAGE, DETAIL
  title: string;
  description: string;
  logDatas: LogData[];
  logOrganization: LogOrganization;

  // for log-detail
  directoryModels: DirectoryModel[];
  tagModels: TagModel[];
}
