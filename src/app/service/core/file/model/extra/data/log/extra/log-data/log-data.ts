export class LogData {
  logDataType: string;
  css: { [directive: string]: string };
  data: any;

  constructor(logDataType: string, data: any) {
    this.logDataType = logDataType;
    this.data = data;
  }
}
