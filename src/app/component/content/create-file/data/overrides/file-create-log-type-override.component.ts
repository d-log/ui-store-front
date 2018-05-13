import {Component, Input} from '@angular/core';
import {LogFileData} from '../../../../../service/core/file/model/extra/data/log/log-file-data';

@Component({
  selector: 'app-file-create-log-type-override',
  templateUrl: './file-create-log-type-override.component.html',
  styleUrls: ['./file-create-log-type-override.component.css']
})
export class FileCreateLogTypeOverrideComponent {
  @Input() data: LogFileData;
  t = 10;
}
