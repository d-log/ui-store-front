import {Component, OnInit} from '@angular/core';
import {LogModel} from '../../../service/core/model/data/log/log-model';
import {LogModelService} from '../../../service/core/endpoint/log/log-model.service';
import {LogDisplayType} from '../../../service/core/model/data/log/extra/log-display-type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  rootLogModel: LogModel;

  constructor(private logModelService: LogModelService) {
  }

  ngOnInit() {
    this.logModelService.getRoot(LogDisplayType.PAGE, LogDisplayType.TILE).subscribe((fileModel: LogModel) => {
      this.rootLogModel = fileModel;
    });
  }
}
