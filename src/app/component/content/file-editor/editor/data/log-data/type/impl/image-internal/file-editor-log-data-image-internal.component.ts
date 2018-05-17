import {Component, Input} from '@angular/core';
import {ImageInternalLogData} from '../../../../../../../../../service/core/file/model/extra/data/log/extra/log-data/type/image-internal/image-internal-log-data';

@Component({
  selector: 'app-file-editor-log-data-image-internal',
  templateUrl: './file-editor-log-data-image-internal.component.html',
  styleUrls: ['./file-editor-log-data-image-internal.component.css']
})
export class FileEditorLogDataImageInternalComponent {
  @Input() imageInternalLogData: ImageInternalLogData;
}
