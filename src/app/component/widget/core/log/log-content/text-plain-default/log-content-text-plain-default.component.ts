import {Component, Input} from '@angular/core';
import {TextPlainLogContent} from '../../../../../../service/core/file/model/extra/data/log/extra/log-content/type/text-plain/text-plain-log-content';

@Component({
  selector: 'app-log-content-text-plain-default',
  templateUrl: './log-content-text-plain-default.component.html',
  styleUrls: ['./log-content-text-plain-default.component.css']
})
export class LogContentTextPlainDefaultComponent {
  @Input() data: TextPlainLogContent;
}
