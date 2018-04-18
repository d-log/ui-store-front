import {LogData} from './logdata/log-data';

export class LogModel {
  ID: string;
  logType: string; // DEFAULT
  title: string;
  description: string;
  logDatas: LogData[];
  directoryIDs: string[];
  tagIDs: string[];

  constructor(ID: string, logType: string, logDatas: LogData[], directoryIDs: string[], tagIDs: string[]) {
    this.ID = ID;
    this.logType = logType;
    this.logDatas = logDatas;
    this.directoryIDs = directoryIDs;
    this.tagIDs = tagIDs;
  }
}
