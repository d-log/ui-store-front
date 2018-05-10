import {Component} from '@angular/core';
import {FileType} from '../../service/core/file/model/extra/file-type';

@Component({
  selector: 'app-navigation-side-left',
  templateUrl: './navigation-side-left.component.html',
  styleUrls: ['./navigation-side-left.component.css']
})
export class NavigationSideLeftComponent {
  showColumnToolbar: boolean;
  fileTypes: FileType[];

  constructor() {
    this.fileTypes = [FileType.LogFileData, FileType.LogDirectoryFileData];
    this.showColumnToolbar = true;
  }

  target() {
    alert('coming soon');
  }
}
