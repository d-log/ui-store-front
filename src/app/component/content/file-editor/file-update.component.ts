import {Component} from '@angular/core';
import {FileModel} from '../../../service/core/file/model/file-model';
import {LogModelService} from '../../../service/core/file/type/log/log-model.service';
import {ActivatedRoute, Router} from '@angular/router';
import {LogType} from '../../../service/core/file/model/extra/data/log/extra/log-type';

@Component({
  selector: 'app-file-update',
  templateUrl: './file-update.component.html',
  styleUrls: ['./file-update.component.css']
})
export class FileUpdateComponent {

  fileModel: FileModel;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private logModelService: LogModelService) {
    activatedRoute.params.subscribe(params => this.initialize(params));
  }

  initialize(params: any) {
    // grab value of url param `id` in `localhost:4200/file/update/:id
    const id = params['id'];
    if (!!id) {
      this.logModelService.findOne(id, LogType.PAGE).subscribe((fileModel: FileModel) => {
        this.fileModel = fileModel;
      });
    }
  }

  doneEditing(fileModel: FileModel) {
    // this.logModelService.create(fileModel).subscribe((savedModel: FileModel) => {
    //   this.router.navigate(['/log-page/' + savedModel.id]);
    // });
  }
}
