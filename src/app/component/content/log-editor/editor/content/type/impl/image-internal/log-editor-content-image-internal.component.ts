import {Component, Input} from '@angular/core';
import {ImageInternalLogContent} from '../../../../../../../../service/core/model/data/log/extra/log-content/type/image-internal/image-internal-log-content';

@Component({
  selector: 'app-log-editor-content-image-internal',
  templateUrl: './log-editor-content-image-internal.component.html',
  styleUrls: ['./log-editor-content-image-internal.component.css']
})
export class LogEditorContentImageInternalComponent {
  @Input() imageInternalLogContent: ImageInternalLogContent;
}
