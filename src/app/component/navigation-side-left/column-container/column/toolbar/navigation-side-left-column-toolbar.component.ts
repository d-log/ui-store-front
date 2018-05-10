import {Component, Input} from '@angular/core';
import {FileModel} from '../../../../../service/core/file/model/file-model';

@Component({
  selector: 'app-navigation-side-left-column-toolbar',
  templateUrl: './navigation-side-left-column-toolbar.component.html',
  styleUrls: ['./navigation-side-left-column-toolbar.component.css']
})
export class NavigationSideLeftColumnToolbarComponent {

  @Input() logDirectoryFileModel: FileModel;
}
