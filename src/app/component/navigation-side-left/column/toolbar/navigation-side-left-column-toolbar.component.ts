import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';
import {FileModel} from '../../../../service/core/file/model/file-model';
import {FileType} from '../../../../service/core/file/model/extra/file-type';

@Component({
  selector: 'app-navigation-side-left-column-toolbar',
  templateUrl: './navigation-side-left-column-toolbar.component.html',
  styleUrls: ['./navigation-side-left-column-toolbar.component.css']
})
export class NavigationSideLeftColumnToolbarComponent {

  @Input() logDirectoryFileModel: FileModel;

  constructor(private router: Router) {
  }

  viewDirectoryInContent() {
    // passing directory id as URL parameters <-- this does not refresh the Angular Route route-outlet's Component
    // this.router.navigate(['/log-tile/archive'], {queryParams: {'directory-id': this.logDirectoryFileModel.id}});

    // passing directory id as matrix parameter
    this.router.navigate(['log-tile/archive',
      {
        'directory-id': this.logDirectoryFileModel.id,
        'file-types': FileType[FileType.LogDirectoryFileData] + ':' + FileType[FileType.LogFileData],
      }]);
  }
}
