import {Component, Input} from '@angular/core';
import {Metadata} from '../../../../service/core/file/model/extra/metadata';

@Component({
  selector: 'app-file-create-metadata',
  templateUrl: './file-create-metadata.component.html',
  styleUrls: ['./file-create-metadata.component.css']
})
export class FileCreateMetadataComponent {
  @Input() metadata: Metadata;
}
