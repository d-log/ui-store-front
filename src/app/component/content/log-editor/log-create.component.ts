import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {LogModelService} from '../../../service/core/endpoint/log/log-model.service';
import {LogModel} from '../../../service/core/model/data/log/log-model';

@Component({
  templateUrl: './log-create.component.html',
  styleUrls: ['./log-create.component.css']
})
export class LogCreateComponent {

  constructor(private router: Router,
              private logModelService: LogModelService) {
  }

  doneEditing(fileModel: LogModel) {
    this.logModelService.create(fileModel).subscribe((savedModel: LogModel) => {
      this.router.navigate(['/log-page/' + savedModel.id]);
    });
  }
}
