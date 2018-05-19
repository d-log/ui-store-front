import {Component, Input} from '@angular/core';
import {Metadata} from '../../../../../service/core/file/model/extra/metadata';

@Component({
  selector: 'app-log-editor-metadata',
  templateUrl: './log-editor-metadata.component.html',
  styleUrls: ['./log-editor-metadata.component.css']
})
export class LogEditorMetadataComponent {
  @Input() metadata: Metadata;
}
