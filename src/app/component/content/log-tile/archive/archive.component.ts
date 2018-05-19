import {Component, ViewChild} from '@angular/core';
import 'rxjs/add/operator/switchMap';
import {MasonryComponent} from '../masonry/masonry.component';
import {Observable} from 'rxjs/Observable';
import {LogModel} from '../../../../service/core/file/model/extra/data/log/log-model';
import {LogGetterRequest} from '../../../../service/core/file/type/log/log-getter-request';
import {LogModelService} from '../../../../service/core/file/type/log/log-model.service';
import {ActivatedRoute} from '@angular/router';
import {Pageable} from '../../../../service/core/model/request/pageable';
import {LogDisplayType} from '../../../../service/core/file/model/extra/data/log/extra/log-display-type';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent {

  @ViewChild(MasonryComponent) masonryComponent: MasonryComponent;

  fileModelsObservable: Observable<LogModel[]>;

  getterRequest: LogGetterRequest;
  moreFilesExist: boolean;
  isEmptyResponse: boolean;

  constructor(private logModelService: LogModelService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      this.initialize(params);
    });
  }

  initialize(params) {
    // reset masonry
    if (!!this.masonryComponent) {
      this.masonryComponent.initialize();
    }

    this.moreFilesExist = true;
    this.isEmptyResponse = false;
    this.getterRequest = this.generateGetterRequest(params);

    this.getMoreFiles();
    this.fileModelsObservable.subscribe(logModels => {
      if (logModels.length === 0) {
        this.isEmptyResponse = true;
      }
    });
  }

  private generateGetterRequest(params) {
    const getterRequest = new LogGetterRequest();
    getterRequest.millisecondThreshold = new Date().getTime();
    getterRequest.pageable = new Pageable(-1, 10);
    getterRequest.logDisplayType = LogDisplayType.TILE;

    // grab value of URL parameters (example `q` in `localhost:4200/search?q=something`)
    // getterRequest.searchString = this.activatedRoute.snapshot.queryParams['q'];
    // getterRequest.parentLogID = this.activatedRoute.snapshot.queryParams['directory-id'];
    // getterRequest.tagID = this.activatedRoute.snapshot.queryParams['tag-id'];

    // grab the matrix URL values (example `q` in `localhost:4200/log-page/archive;q=something;r=something/more/url`)
    getterRequest.searchString = params['q'];
    getterRequest.parentLogID = params['parent-log-id'];
    getterRequest.tagID = params['tag-id'];

    return getterRequest;
  }

  /**
   * called from MasonryComponent child
   */
  getMoreFiles() {
    this.getterRequest.pageable.page++;
    this.fileModelsObservable = this.logModelService.theGetter(this.getterRequest);
  }
}
