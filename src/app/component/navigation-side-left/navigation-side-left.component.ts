import {Component} from '@angular/core';
import {FileType} from '../../service/core/file/model/extra/file-type';
import {FileModel} from '../../service/core/file/model/file-model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navigation-side-left',
  templateUrl: './navigation-side-left.component.html',
  styleUrls: ['./navigation-side-left.component.css']
})
export class NavigationSideLeftComponent {
  showColumnToolbar: boolean;
  fileTypes: FileType[];

  constructor(private router: Router) {
    this.fileTypes = [FileType.LogFileData, FileType.LogDirectoryFileData];
    this.showColumnToolbar = true;
  }

  onLogFileModelSelected(fileModel: FileModel) {
    this.router.navigate(['/log-page/' + fileModel.id]);
  }

  onDirectoryFileModelSelectedMoreThanOnce(fileModel: FileModel) {
    // passing directory id as URL parameters <-- this does not refresh the Angular Route route-outlet's Component
    // this.router.navigate(['/log-tile/archive'], {queryParams: {'directory-id': this.logDirectoryFileModel.id}});

    // passing directory id as matrix parameter
    this.router.navigate(['log-tile/archive',
      {
        'directory-id': fileModel.id,
        'file-types': FileType[FileType.LogDirectoryFileData] + ':' + FileType[FileType.LogFileData],
      }]);
  }
}
