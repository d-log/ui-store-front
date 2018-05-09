import {Component} from '@angular/core';
import {FileModel} from '../../../service/core/file/model/file-model';

@Component({
  selector: 'app-file-create',
  templateUrl: './file-create.component.html',
  styleUrls: ['./file-create.component.css']
})
export class FileCreateComponent {

  fileModel: FileModel;

}
