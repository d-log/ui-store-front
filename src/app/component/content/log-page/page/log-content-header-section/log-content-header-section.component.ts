import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';
import {LogModel} from '../../../../../service/core/file/model/extra/data/log/log-model';

@Component({
  selector: 'app-log-content-header-section',
  templateUrl: './log-content-header-section.component.html',
  styleUrls: ['./log-content-header-section.component.css']
})
export class LogContentHeaderSectionComponent {
  @Input() fileModel: LogModel;

  constructor(private router: Router) {
  }

  viewLogsWithParentLogIDInContent(parentLogID: string) {
    // passing directory id as matrix parameter
    this.router.navigate(['log-tile/archive', {'parent-log-id': parentLogID}]);
  }

  viewLogsWithTagIDInContent(tagID: string) {
    // passing tag id as matrix parameter
    this.router.navigate(['log-tile/archive', {'tag-id': tagID}]);
  }
}
