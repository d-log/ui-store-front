import {Component, Input} from '@angular/core';
import {LogModel} from '../../../../../service/core/file/model/extra/data/log/log-model';

@Component({
  selector: 'app-log-editor-organization',
  templateUrl: './log-editor-organization.component.html',
  styleUrls: ['./log-editor-organization.component.css']
})
export class LogEditorOrganizationComponent {
  @Input() logModel: LogModel;
}
