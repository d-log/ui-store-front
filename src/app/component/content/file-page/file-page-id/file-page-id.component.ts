import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {FileModel} from '../../../../service/core/file/model/file-model';
import {LogModelService} from '../../../../service/core/file/type/log/log-model.service';
import {LogType} from '../../../../service/core/file/model/extra/data/logdata/log-type';

@Component({
  selector: 'app-file-page-id',
  templateUrl: './file-page-id.component.html',
  styleUrls: ['./file-page-id.component.css']
})
export class FilePageIdComponent {

  fileModel: FileModel;

  constructor(private logFileService: LogModelService,
              private activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe(params => this.initialize(params));
  }

  initialize(params: any) {
    // grab value of url param `id` in `localhost:4200/log-page/:id
    const id = params['id'];
    if (!!id) {
      this.logFileService.findOne(id, LogType.PAGE).subscribe((fileModel: FileModel) => {
        this.fileModel = fileModel;
      });
    }
  }
}
