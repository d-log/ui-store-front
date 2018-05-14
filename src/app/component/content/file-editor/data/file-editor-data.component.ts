import {Component, Input} from '@angular/core';
import {LogFileData} from '../../../../service/core/file/model/extra/data/log/log-file-data';

@Component({
  selector: 'app-file-editor-data',
  templateUrl: './file-editor-data.component.html',
  styleUrls: ['./file-editor-data.component.css']
})
export class FileEditorDataComponent {
  @Input() data: LogFileData;
}
