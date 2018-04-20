import {Component, OnInit} from '@angular/core';
import {LogType} from '../../../service/log/model/extra/log-type';
import {Pageable} from '../../../service/model/pageable';
import {LogModel} from '../../../service/log/model/log-model';
import {LogModelService} from '../../../service/log/log-model.service';
import {Observable} from 'rxjs/Observable';
import {GetterRequest} from '../../../service/log/getter-request';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  logModelsObservable: Observable<LogModel[]>;

  millisecondThreshold: number;
  page: number;
  size: number;
  moreLogsExist: boolean;
  searchString: string;

  constructor(private logLightService: LogModelService,
              private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.page = -1;
    this.size = 5;
    this.moreLogsExist = true;
    this.millisecondThreshold = new Date().getTime();

    // grab value of url param `q` in `localhost:4200/search?q=something
    this.searchString = this.activatedRoute.snapshot.queryParams['q'];
    if (!!this.searchString) {
      this.getMoreLogs();
    }
  }

  getMoreLogs() {
    this.page++;

    const getterRequest = new GetterRequest();
    getterRequest.millisecondThreshold = this.millisecondThreshold;
    getterRequest.pageable = new Pageable(this.page, this.size);
    getterRequest.logType = LogType.TILE;
    getterRequest.searchString = this.searchString;
    this.logModelsObservable = this.logLightService.theGetter(getterRequest);
  }
}
