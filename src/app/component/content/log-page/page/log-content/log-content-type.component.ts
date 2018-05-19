import {Component, Input} from '@angular/core';
import 'rxjs/add/operator/switchMap';
import {LogModel} from '../../../../../service/core/file/model/extra/data/log/log-model';
import {LogContent} from '../../../../../service/core/file/model/extra/data/log/extra/log-data/log-content';

@Component({
  selector: 'app-log-content-type',
  templateUrl: './log-content-type.component.html',
  styleUrls: ['./log-content-type.component.css']
})
export class LogContentTypeComponent {
  @Input() logModel: LogModel;
  @Input() logContent: LogContent;
}
