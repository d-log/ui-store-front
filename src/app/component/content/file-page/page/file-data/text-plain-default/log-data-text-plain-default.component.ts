import {Component, Input} from '@angular/core';
import {TextPlainLogData} from '../../../../../../service/core/file/model/extra/data/log/extra/log-data/type/text-plain/text-plain-log-data';

@Component({
  selector: 'app-log-data-text-plain-default',
  templateUrl: './log-data-text-plain-default.component.html',
  styleUrls: ['./log-data-text-plain-default.component.css']
})
export class LogDataTextPlainDefaultComponent {
  @Input() data: TextPlainLogData;
}
