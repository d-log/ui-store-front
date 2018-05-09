import {Component, ViewChild} from '@angular/core';
import {Pageable} from '../../../../service/core/model/request/pageable';
import {Observable} from 'rxjs/Observable';
import {ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {MasonryComponent} from '../masonry/masonry.component';
import {FileModelService} from '../../../../service/core/file/file-model.service';
import {FileModel} from '../../../../service/core/file/model/file-model';
import {LogType} from '../../../../service/core/file/model/extra/data/log/extra/log-type';
import {GetterRequest} from '../../../../service/core/model/request/getter-request';
import {FileType} from '../../../../service/core/file/model/extra/file-type';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent {

  @ViewChild(MasonryComponent) masonryComponent: MasonryComponent;

  fileModelsObservable: Observable<FileModel[]>;

  getterRequest: GetterRequest;
  moreFilesExist: boolean;
  isEmptyResponse: boolean;

  constructor(private fileModelService: FileModelService,
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
    const getterRequest = new GetterRequest();
    getterRequest.millisecondThreshold = new Date().getTime();
    getterRequest.pageable = new Pageable(-1, 10);
    getterRequest.logType = LogType.TILE;

    // grab value of URL parameters (example `q` in `localhost:4200/search?q=something`)
    // getterRequest.searchString = this.activatedRoute.snapshot.queryParams['q'];
    // getterRequest.directoryID = this.activatedRoute.snapshot.queryParams['directory-id'];
    // getterRequest.tagID = this.activatedRoute.snapshot.queryParams['tag-id'];

    // grab the matrix URL values (example `q` in `localhost:4200/log-page/archive;q=something;r=something/more/url`)
    getterRequest.searchString = params['q'];
    getterRequest.directoryID = params['directory-id'];
    getterRequest.tagID = params['tag-id'];
    const fileTypes: string = params['file-types'];

    if (!!fileTypes) {
      getterRequest.fileTypes = [];
      const fileTypesArray = fileTypes.split(':');
      for (const t of fileTypesArray) {
        const fileType: FileType = FileType[t];
        getterRequest.fileTypes.push(fileType);
      }
    } else {
      getterRequest.fileTypes = [FileType.LogFileData];
    }

    return getterRequest;
  }

  /**
   * called from MasonryComponent child
   */
  getMoreFiles() {
    this.getterRequest.pageable.page++;
    this.fileModelsObservable = this.fileModelService.theGetter(this.getterRequest);
  }
}
