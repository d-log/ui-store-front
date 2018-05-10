export class LogData {
  logDataType: string;
  data: any;

  constructor(logDataType: string, data: any) {
    this.logDataType = logDataType;
    this.data = data;
  }
}
