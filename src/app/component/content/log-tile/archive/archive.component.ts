import {Component, ViewChild} from '@angular/core';
import {Pageable} from '../../../../service/core/model/pageable';
import {Observable} from 'rxjs/Observable';
import {ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {MasonryComponent} from '../masonry/masonry.component';
import {FileModelService} from '../../../../service/core/file/file-model.service';
import {FileModel} from '../../../../service/core/file/model/file-model';
import {LogType} from '../../../../service/core/file/model/extra/data/logdata/log-type';
import {GetterRequest} from '../../../../service/core/file/getter-request';
import {FileType} from '../../../../service/core/file/model/extra/file-type';

/**
 * TODO add filters and sort by options
 */
@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent {

  @ViewChild(MasonryComponent) masonryComponent: MasonryComponent;

  fileModelsObservable: Observable<FileModel[]>;

  getterRequest: GetterRequest;
  moreLogsExist: boolean;
  isEmptyResponse: boolean;

  constructor(private fileModelService: FileModelService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      this.initialize(params);
    });
  }

  initialize(params) {
    if (!!this.masonryComponent) {
      this.masonryComponent.ngOnInit();
    }

    this.moreLogsExist = true;
    this.isEmptyResponse = false;

    const getterRequest = new GetterRequest();
    getterRequest.fileTypes = [FileType.LogFileData];
    getterRequest.millisecondThreshold = new Date().getTime();
    getterRequest.pageable = new Pageable(-1, 5);
    getterRequest.logType = LogType.TILE;

    getterRequest.searchString = params['q'];
    getterRequest.directoryID = params['directory-id'];
    getterRequest.tagID = params['tag-id'];

    this.getterRequest = getterRequest;

    this.getMoreLogs();
    this.fileModelsObservable.subscribe(logModels => {
      if (logModels.length === 0) {
        this.isEmptyResponse = true;
      }
    });

    // grab value of url parameters (example `q` in `localhost:4200/search?q=something)
    // this.getterRequest.searchString = this.activatedRoute.snapshot.queryParams['q'];
    // this.getterRequest.directoryID = this.activatedRoute.snapshot.queryParams['directory-id'];
    // this.getterRequest.tagID = this.activatedRoute.snapshot.queryParams['tag-id'];
  }

  /**
   * called from MasonryComponent child
   */
  getMoreLogs() {
    this.getterRequest.pageable.page++;
    this.fileModelsObservable = this.fileModelService.theGetter(this.getterRequest);
  }
}
