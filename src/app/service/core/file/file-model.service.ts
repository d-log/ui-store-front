import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http, Response} from '@angular/http';
import {HateoasResponse} from '../model/response/hateoas-response';
import 'rxjs/add/operator/map';
import {LogType} from './model/extra/data/log/extra/log-type';
import {GetterRequest} from '../model/request/getter-request';
import {FileModel} from './model/file-model';
import {FileType} from './model/extra/file-type';
import {SortOrder} from '../model/request/sort-order';
import {environment} from '../../../../environments/environment';

@Injectable()
export class FileModelService {

  private readonly fileURL: string;

  constructor(private http: Http) {
    this.fileURL = environment.coreEndPoint + '/api/file';
  }

  /**
   * `?page=0&size=10`
   * @returns {Observable<FileModel[]>}
   */
  theGetter(getterRequest: GetterRequest): Observable<FileModel[]> {
    return this.http
      .get(this.generateTheGetterURL(getterRequest))
      .map((response: Response) => {
        const hateoasResponse = <HateoasResponse>response.json();
        return hateoasResponse._embedded.collection;
      });
  }

  generateTheGetterURL(getterRequest: GetterRequest): string {
    const urlParameters: string[] = [];

    if (getterRequest.fileTypes !== undefined) {
      for (const fileType of getterRequest.fileTypes) {
        urlParameters.push('file-type=' + FileType[fileType]);
      }
    }
    if (getterRequest.sorts !== undefined) {
      for (const s of getterRequest.sorts) {
        if (!!s) {
          urlParameters.push('sort=' + s.parameter + ',' + SortOrder[s.order]);
        }
      }
    }
    if (getterRequest.logType !== undefined) {
      urlParameters.push('log-type=' + LogType[getterRequest.logType]);
    }
    if (getterRequest.pageable !== undefined) {
      urlParameters.push('page=' + getterRequest.pageable.page + '&size=' + getterRequest.pageable.size);
    }
    if (getterRequest.directoryID !== undefined) {
      urlParameters.push('directory-id=' + getterRequest.directoryID);
    }
    if (getterRequest.tagID !== undefined) {
      urlParameters.push('tag-id=' + getterRequest.tagID);
    }
    if (getterRequest.millisecondThreshold !== undefined) {
      urlParameters.push('millisecond-threshold=' + getterRequest.millisecondThreshold);
    }
    if (getterRequest.searchString !== undefined) {
      urlParameters.push('search=' + encodeURIComponent(getterRequest.searchString));
    }

    let url = this.fileURL + '/the-getter';
    if (urlParameters.length > 0) {
      url += '?' + urlParameters.join('&');
    }
    // console.log(url);

    return url;
  }
}
