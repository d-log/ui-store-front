import {Component, Input} from '@angular/core';
import {LogModel} from '../../../../../../../service/core/model/data/log/log-model';

@Component({
  selector: 'app-log-selector-column-toolbar',
  templateUrl: './log-selector-column-toolbar.component.html',
  styleUrls: ['./log-selector-column-toolbar.component.css']
})
export class LogSelectorColumnToolbarComponent {

  @Input() logModel: LogModel;
}
