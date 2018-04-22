import {LogData} from './extra/logdata/log-data';
import {LogOrganization} from './extra/log-organization';

export class LogModel {
  id: string;
  logType: string; // DEFAULT, TILE, PAGE, DETAIL
  title: string;
  description: string;
  logDatas: LogData[];
  logOrganization: LogOrganization;

  constructor(id: string, logType: string, logDatas: LogData[], logOrganization: LogOrganization) {
    this.id = id;
    this.logType = logType;
    this.logDatas = logDatas;
    this.logOrganization = logOrganization;
  }
}
