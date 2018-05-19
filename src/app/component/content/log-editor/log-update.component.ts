import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {LogModel} from '../../../service/core/file/model/extra/data/log/log-model';
import {LogModelService} from '../../../service/core/file/type/log/log-model.service';
import {LogDisplayType} from '../../../service/core/file/model/extra/data/log/extra/log-display-type';

@Component({
  templateUrl: './log-update.component.html',
  styleUrls: ['./log-update.component.css']
})
export class LogUpdateComponent {

  fileModel: LogModel;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private logModelService: LogModelService) {
    activatedRoute.params.subscribe(params => this.initialize(params));
  }

  initialize(params: any) {
    // grab value of url param `id` in `localhost:4200/file/update/:id
    const id = params['id'];
    if (!!id) {
      this.logModelService.findOne(id, LogDisplayType.FORUPDATE).subscribe((fileModel: LogModel) => {
        this.fileModel = fileModel;
      });
    }
  }

  doneEditing(fileModel: LogModel) {
    this.logModelService.update(fileModel).subscribe((savedModel: LogModel) => {
      this.router.navigate(['/log-page/' + savedModel.id]);
    });
  }
}
