import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ImageInternalLogData} from '../../../../../../../../service/core/file/model/extra/data/log/extra/log-data/type/image-internal/image-internal-log-data';

@Component({
  selector: 'app-file-create-log-data-image-internal',
  templateUrl: './file-create-log-data-image-internal.component.html',
  styleUrls: ['./file-create-log-data-image-internal.component.css']
})
export class FileCreateLogDataImageInternalComponent {
  @Input() imageInternalLogData: ImageInternalLogData;
  @Output() updateFileModel = new EventEmitter<boolean>();
}
