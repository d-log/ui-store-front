import {Component, Input} from '@angular/core';
import {FileModel} from '../../../../../service/core/file/model/file-model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-file-page-content-header',
  templateUrl: './file-page-content-header.component.html',
  styleUrls: ['./file-page-content-header.component.css']
})
export class FilePageContentHeaderComponent {
  @Input() fileModel: FileModel;

  constructor(private router: Router) {
  }

  viewDirectoryInContent(logDirectoryFileID: string) {
    // passing directory id as matrix parameter
    this.router.navigate(['log-tile/archive', {'directory-id': logDirectoryFileID}]);
  }

  viewTagInContent(tagFileID: string) {
    // passing tag id as matrix parameter
    this.router.navigate(['log-tile/archive', {'tag-id': tagFileID}]);
  }
}
