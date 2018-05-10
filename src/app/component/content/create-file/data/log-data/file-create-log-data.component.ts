import {Component, EventEmitter, Input, Output} from '@angular/core';
import {LogData} from '../../../../../service/core/file/model/extra/data/log/extra/log-data/log-data';

@Component({
  selector: 'app-file-create-log-data',
  templateUrl: './file-create-log-data.component.html',
  styleUrls: ['./file-create-log-data.component.css']
})
export class FileCreateLogDataComponent {
  @Output() updateFileModel = new EventEmitter<boolean>();
  @Input() logDatas: LogData[];
  // ngAfterViewInit() {
  //   // Enable the tab character onkeypress (onkeydown) inside textarea...
  //   // ... for a textarea that has an `id="my-textarea"`
  //   this.enableTab('workspace-textarea');
  // }
  //
  // enableTab(id) {
  //   const el: HTMLTextAreaElement = <HTMLTextAreaElement>document.getElementById(id);
  //   el.onkeydown = function (e) {
  //     if (e.keyCode === 9) { // tab was pressed
  //
  //       // get caret position/selection
  //       const val = this.value,
  //         start = this.selectionStart,
  //         end = this.selectionEnd;
  //
  //       // set textarea value to: text before caret + tab + text after caret
  //       this.value = val.substring(0, start) + '\t' + val.substring(end);
  //
  //       // put caret at right position again
  //       this.selectionStart = this.selectionEnd = start + 1;
  //
  //       // prevent the focus lose
  //       return false;
  //     }
  //   };
  // }
  //
  // textAreaChanged(event: Event) {
  //   try {
  //     const textAreaElement: HTMLTextAreaElement = <HTMLTextAreaElement>event.srcElement;
  //     const fileModel = JSON.parse(textAreaElement.value);
  //     fileModel.metadata.created = +new Date();
  //     this.fileModel = fileModel;
  //   } catch (e) {
  //     if (e instanceof SyntaxError) {
  //       console.log('syntax error');
  //     } else {
  //       throw e;
  //     }
  //   }
  // }
}
