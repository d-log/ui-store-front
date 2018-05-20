import {Component, Input} from '@angular/core';
import {LogModel} from '../../../../../../../service/core/model/data/log/log-model';

@Component({
  selector: 'app-log-content-comment-section',
  templateUrl: './log-content-comment-section.component.html',
  styleUrls: ['./log-content-comment-section.component.css']
})
export class LogContentCommentSectionComponent {
  @Input() logModel: LogModel;
}
