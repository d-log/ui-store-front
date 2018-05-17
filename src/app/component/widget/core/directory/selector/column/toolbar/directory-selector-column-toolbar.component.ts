import {Component, Input} from '@angular/core';
import {FileModel} from '../../../../../../../service/core/file/model/file-model';

@Component({
  selector: 'app-directory-selector-column-toolbar',
  templateUrl: './directory-selector-column-toolbar.component.html',
  styleUrls: ['./directory-selector-column-toolbar.component.css']
})
export class DirectorySelectorColumnToolbarComponent {

  @Input() logDirectoryFileModel: FileModel;
}
