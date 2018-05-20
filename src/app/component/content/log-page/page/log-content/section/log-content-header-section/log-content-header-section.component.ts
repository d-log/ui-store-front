import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';
import {LogModel} from '../../../../../../../service/core/model/data/log/log-model';

@Component({
  selector: 'app-log-content-header-section',
  templateUrl: './log-content-header-section.component.html',
  styleUrls: ['./log-content-header-section.component.css']
})
export class LogContentHeaderSectionComponent {
  @Input() logModel: LogModel;

  constructor(private router: Router) {
  }

  viewLogPage(parentLogID: string) {
    this.router.navigate(['/log-page/' + parentLogID]);
  }

  viewLogsWithTagIDInContent(tagID: string) {
    this.router.navigate(['log-tile/archive', {'tag-id': tagID}]);
  }
}
