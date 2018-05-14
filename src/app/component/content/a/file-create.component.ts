import {Component} from '@angular/core';
import {FileModel} from '../../../service/core/file/model/file-model';
import {LogModelService} from '../../../service/core/file/type/log/log-model.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-file-create',
  templateUrl: './file-create.component.html',
  styleUrls: ['./file-create.component.css']
})
export class FileCreateComponent {

  constructor(private router: Router,
              private logModelService: LogModelService) {
  }

  doneEditing(fileModel: FileModel) {
    this.logModelService.create(fileModel).subscribe((savedModel: FileModel) => {
      this.router.navigate(['/log-page/' + savedModel.id]);
    });
  }
}
