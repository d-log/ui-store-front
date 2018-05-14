import {Component, Input} from '@angular/core';
import {Metadata} from '../../../../service/core/file/model/extra/metadata';

@Component({
  selector: 'app-file-create-metadata',
  templateUrl: './file-editor-metadata.component.html',
  styleUrls: ['./file-editor-metadata.component.css']
})
export class FileEditorMetadataComponent {
  @Input() metadata: Metadata;
}
