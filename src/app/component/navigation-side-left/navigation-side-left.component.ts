import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {LogModel} from '../../service/core/file/model/extra/data/log/log-model';

@Component({
  selector: 'app-navigation-side-left',
  templateUrl: './navigation-side-left.component.html',
  styleUrls: ['./navigation-side-left.component.css']
})
export class NavigationSideLeftComponent {
  showColumnToolbar: boolean;

  constructor(private router: Router) {
    this.showColumnToolbar = true;
  }

  onLogFileModelSelected(fileModel: LogModel) {
    this.router.navigate(['/log-page/' + fileModel.id]);
  }

  onDirectoryFileModelSelectedMoreThanOnce(fileModel: LogModel) {
    // passing directory id as URL parameters <-- this does not refresh the Angular Route route-outlet's Component
    // this.router.navigate(['/log-tile/archive'], {queryParams: {'directory-id': this.parentLogModel.id}});

    // passing directory id as matrix parameter
    this.router.navigate(['log-tile/archive', {'parent-log-id': fileModel.id}]);
  }
}
