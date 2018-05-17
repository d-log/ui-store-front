import {Component, Input} from '@angular/core';
import {LogFileData} from '../../../../../../service/core/file/model/extra/data/log/log-file-data';

@Component({
  selector: 'app-file-editor-organization',
  templateUrl: './file-editor-organization.component.html',
  styleUrls: ['./file-editor-organization.component.css']
})
export class FileEditorOrganizationComponent {
  @Input() data: LogFileData;
}
