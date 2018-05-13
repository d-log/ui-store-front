import {Component, Input, OnInit} from '@angular/core';
import {LogData} from '../../../../../../../service/core/file/model/extra/data/log/extra/log-data/log-data';

@Component({
  selector: 'app-file-create-log-data-css',
  templateUrl: './file-create-log-data-css.component.html',
  styleUrls: ['./file-create-log-data-css.component.css']
})
export class FileCreateLogDataCssComponent implements OnInit {
  @Input() logData: LogData;

  keys: string[];
  values: string[];
  showKeyValues: boolean;

  constructor() {
    this.keys = [];
    this.values = [];
    this.showKeyValues = false;
  }

  ngOnInit() {
    if (!this.logData.css) {
      this.logData.css = {};
    }

    for (const property in this.logData.css) {
      this.keys.push(property);
      this.values.push(this.logData.css[property]);
    }
  }

  toggleDisplay() {
    this.showKeyValues = !this.showKeyValues;
  }

  onDeleteCssDirective(index: number) {
    const key = this.keys[index];
    delete this.logData.css[key];
    this.values.splice(index, 1);
    this.keys.splice(index, 1);
  }

  keyChanged(event: Event, index: number) {
    const newKey: string = (<HTMLInputElement>event.srcElement).value;
    const oldKey = this.keys[index];
    const sameValue = this.values[index];
    delete this.logData.css[oldKey];
    this.logData.css[newKey] = sameValue;
    this.keys[index] = newKey;
  }

  valueChanged(event: Event, index: number) {
    const element: HTMLInputElement = <HTMLInputElement>event.srcElement;
    const key = this.keys[index];
    this.logData.css[key] = element.value;
  }

  add() {
    this.logData.css[''] = '';
    if (Object.keys(this.logData.css).length > this.keys.length) {
      this.values.push('');
      this.keys.push('');
    }
  }
}
