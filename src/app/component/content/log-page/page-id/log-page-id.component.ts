import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {LogModelService} from '../../../../service/core/endpoint/log/log-model.service';
import {LogModel} from '../../../../service/core/model/data/log/log-model';
import {LogDisplayType} from '../../../../service/core/model/data/log/extra/log-display-type';

@Component({
  selector: 'app-log-page-id',
  templateUrl: './log-page-id.component.html',
  styleUrls: ['./log-page-id.component.css']
})
export class LogPageIdComponent {

  fileModel: LogModel;

  constructor(private logFileService: LogModelService,
              private activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe(params => this.initialize(params));
  }

  initialize(params: any) {
    // grab value of url param `id` in `localhost:4200/log-page/:id
    const id = params['id'];
    if (!!id) {
      this.logFileService.findOne(id, LogDisplayType.PAGE).subscribe((fileModel: LogModel) => {
        this.fileModel = fileModel;
      });
    }
  }
}
