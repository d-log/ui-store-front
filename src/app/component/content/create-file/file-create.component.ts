import {AfterViewInit, Component, OnInit} from '@angular/core';
import {FileModel} from '../../../service/core/file/model/file-model';

@Component({
  selector: 'app-file-create',
  templateUrl: './file-create.component.html',
  styleUrls: ['./file-create.component.css']
})
export class FileCreateComponent implements OnInit, AfterViewInit {

  fileModel: FileModel;
  fileModelTile: FileModel;
  fileModelPage: FileModel;

  ngOnInit() {
    // const fileModel = new FileModel();
    //
    // const metadata = new Metadata();
    // metadata.type = 'LogFileData';
    // metadata.description = 'description is here';
    // metadata.name = 'This is the Name';
    // metadata.displayCommentSection = false;
    // metadata.created = +new Date();
    // metadata.lastUpdated = null;
    // fileModel.metadata = metadata;
    //
    // const data = new LogFileData();
    // data.logType = null;
    // const organization = new Organization();
    // organization.parentLogDirectoryFileIDs = [];
    // organization.tagFileIDs = [];
    // data.organization = organization;
    // data.logDatas = [];
    //
    // fileModel.data = data;
    //
    // this.fileModel = fileModel;
  }

  ngAfterViewInit() {
    // Enable the tab character onkeypress (onkeydown) inside textarea...
    // ... for a textarea that has an `id="my-textarea"`
    this.enableTab('workspace-textarea');
  }

  enableTab(id) {
    const el: HTMLTextAreaElement = <HTMLTextAreaElement>document.getElementById(id);
    el.onkeydown = function (e) {
      if (e.keyCode === 9) { // tab was pressed

        // get caret position/selection
        const val = this.value,
          start = this.selectionStart,
          end = this.selectionEnd;

        // set textarea value to: text before caret + tab + text after caret
        this.value = val.substring(0, start) + '\t' + val.substring(end);

        // put caret at right position again
        this.selectionStart = this.selectionEnd = start + 1;

        // prevent the focus lose
        return false;
      }
    };
  }

  textAreaChanged(event: Event) {
    try {
      const textAreaElement: HTMLTextAreaElement = <HTMLTextAreaElement>event.srcElement;
      const fileModel = JSON.parse(textAreaElement.value);
      fileModel.metadata.created = +new Date();
      this.fileModel = fileModel;
    } catch (e) {
      if (e instanceof SyntaxError) {
        console.log('syntax error');
      } else {
        throw e;
      }
    }
  }
}
