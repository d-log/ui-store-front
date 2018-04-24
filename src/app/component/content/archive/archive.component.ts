import {Component, OnInit} from '@angular/core';
import {LogModelService} from '../../../service/log/log-model.service';
import {LogType} from '../../../service/log/model/extra/log-type';
import {Pageable} from '../../../service/model/pageable';
import {Observable} from 'rxjs/Observable';
import {LogModel} from '../../../service/log/model/log-model';
import {GetterRequest} from '../../../service/log/getter-request';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {

  logModelsObservable: Observable<LogModel[]>;

  millisecondThreshold: number;
  page: number;
  size: number;
  moreLogsExist: boolean;

  constructor(private logLightService: LogModelService) {
  }

  ngOnInit() {
    this.page = -1;
    this.size = 5;
    this.moreLogsExist = true;
    this.millisecondThreshold = new Date().getTime();
    this.getMoreLogs();
  }

  getMoreLogs() {
    this.page++;

    const getterRequest = new GetterRequest();
    getterRequest.millisecondThreshold = this.millisecondThreshold;
    getterRequest.pageable = new Pageable(this.page, this.size);
    getterRequest.logType = LogType.TILE;
    this.logModelsObservable = this.logLightService.theGetter(getterRequest);
  }
}
