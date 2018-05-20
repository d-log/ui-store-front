import {Component, Input, OnInit} from '@angular/core';
import {LogContent} from '../../../../../../../service/core/model/data/log/extra/log-content/log-content';

@Component({
  selector: 'app-log-editor-content-css',
  templateUrl: './log-editor-content-css.component.html',
  styleUrls: ['./log-editor-content-css.component.css']
})
export class LogEditorContentCssComponent implements OnInit {
  @Input() logContent: LogContent;

  keys: string[];
  values: string[];

  constructor() {
    this.keys = [];
    this.values = [];
  }

  ngOnInit() {
    if (!this.logContent.css) {
      this.logContent.css = {};
    }

    for (const property in this.logContent.css) {
      this.keys.push(property);
      this.values.push(this.logContent.css[property]);
    }
  }

  onDeleteCssDirective(index: number) {
    const key = this.keys[index];
    delete this.logContent.css[key];
    this.values.splice(index, 1);
    this.keys.splice(index, 1);
  }

  keyChanged(event: Event, index: number) {
    const newKey: string = (<HTMLInputElement>event.srcElement).value;
    const oldKey = this.keys[index];
    const sameValue = this.values[index];
    delete this.logContent.css[oldKey];
    this.logContent.css[newKey] = sameValue;
    this.keys[index] = newKey;
  }

  valueChanged(event: Event, index: number) {
    const element: HTMLInputElement = <HTMLInputElement>event.srcElement;
    const key = this.keys[index];
    this.logContent.css[key] = element.value;
  }

  add() {
    this.logContent.css[''] = '';
    if (Object.keys(this.logContent.css).length > this.keys.length) {
      this.values.push('');
      this.keys.push('');
    }
  }
}
