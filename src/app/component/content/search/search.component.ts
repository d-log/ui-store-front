import {Component, OnInit} from '@angular/core';
import {LogType} from '../../../service/log/model/extra/log-type';
import {Pageable} from '../../../service/model/pageable';
import {LogModel} from '../../../service/log/model/log-model';
import {LogModelService} from '../../../service/log/log-model.service';
import {Observable} from 'rxjs/Observable';
import {GetterRequest} from '../../../service/log/getter-request';
import {ActivatedRoute} from '@angular/router';

/**
 * TODO add filters and sort by options
 */
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  logModelsObservable: Observable<LogModel[]>;

  getterRequest: GetterRequest;
  moreLogsExist: boolean;
  isEmptyResponse: boolean;

  constructor(private logLightService: LogModelService,
              private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.moreLogsExist = true;
    this.isEmptyResponse = false;

    this.getterRequest = new GetterRequest();
    this.getterRequest.millisecondThreshold = new Date().getTime();
    this.getterRequest.pageable = new Pageable(-1, 5);
    this.getterRequest.logType = LogType.TILE;
    // grab value of url parameters (example `q` in `localhost:4200/search?q=something)
    this.getterRequest.searchString = this.activatedRoute.snapshot.queryParams['q'];
    this.getterRequest.directoryID = this.activatedRoute.snapshot.queryParams['directory-id'];
    this.getterRequest.tagID = this.activatedRoute.snapshot.queryParams['tag-id'];

    this.getMoreLogs();
    this.logModelsObservable.subscribe(logModels => {
      if (logModels.length === 0) {
        this.isEmptyResponse = true;
      }});
  }

  getMoreLogs() {
    this.getterRequest.pageable.page++;
    this.logModelsObservable = this.logLightService.theGetter(this.getterRequest);
  }
}
