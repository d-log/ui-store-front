import {Component, Input} from '@angular/core';
import {FileModel} from '../../../../../service/core/file/model/file-model';

@Component({
  selector: 'app-file-page-comment-section',
  templateUrl: './file-page-comment-section.component.html',
  styleUrls: ['./file-page-comment-section.component.css']
})
export class FilePageCommentSectionComponent {
  @Input() fileModel: FileModel;
}
