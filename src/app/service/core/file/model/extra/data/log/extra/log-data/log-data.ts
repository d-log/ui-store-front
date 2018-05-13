export class LogData {
  logDataType: string;
  css: { [directive: string]: string };
  data: any;

  constructor(logDataType: string, css: { [directive: string]: string }, data: any) {
    this.logDataType = logDataType;
    this.css = css;
    this.data = data;
  }
}
