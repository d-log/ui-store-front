import {LogData} from './extra/logdata/log-data';
import {LogOrganization} from './extra/log-organization';

export class LogModel {
  ID: string;
  logType: string; // DEFAULT, TILE, PAGE, DETAIL
  title: string;
  description: string;
  logDatas: LogData[];
  logOrganization: LogOrganization;

  constructor(ID: string, logType: string, logDatas: LogData[], logOrganization: LogOrganization) {
    this.ID = ID;
    this.logType = logType;
    this.logDatas = logDatas;
    this.logOrganization = logOrganization;
  }
}
