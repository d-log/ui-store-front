import {Component, Input} from '@angular/core';
import 'rxjs/add/operator/switchMap';
import {LogData} from '../../../../../service/core/file/model/extra/data/log/extra/log-data/log-data';
import {FileModel} from '../../../../../service/core/file/model/file-model';

@Component({
  selector: 'app-log-data-type',
  templateUrl: './log-data-type.component.html',
  styleUrls: ['./log-data-type.component.css']
})
export class LogDataTypeComponent {
  @Input() fileModel: FileModel;
  @Input() logData: LogData;
}
