import {Component, Input} from '@angular/core';
import {ImageInternalLogContent} from '../../../../../../../../service/core/file/model/extra/data/log/extra/log-data/type/image-internal/image-internal-log-content';

@Component({
  selector: 'app-log-editor-content-image-internal',
  templateUrl: './log-editor-content-image-internal.component.html',
  styleUrls: ['./log-editor-content-image-internal.component.css']
})
export class LogEditorContentImageInternalComponent {
  @Input() imageInternalLogContent: ImageInternalLogContent;
}
