import {Injectable} from '@angular/core';
import {LogModel} from './model/log-model';
import {Observable} from 'rxjs/Observable';
import {Http, Response} from '@angular/http';
import {HateoasResponse} from '../model/response/hateoas-response';
import 'rxjs/add/operator/map';
import {LogType} from './model/extra/log-type';
import {GetterRequest} from './getter-request';

@Injectable()
export class LogModelService {

  private logModelsURL = 'http://core.marcuschiu.com/api/log/';  // URL to web api

  constructor(private http: Http) {
  }

  /**
   * `?page=0&size=10`
   * @returns {Observable<LogModel[]>}
   */
  theGetter(getterRequest: GetterRequest): Observable<LogModel[]> {
    return this.http
      .get(this.generateTheGetterURL(getterRequest))
      .map((response: Response) => {
        const hateoasResponse = <HateoasResponse>response.json();
        return hateoasResponse._embedded.collection;
      });
  }

  /**
   * page information included in return
   * @param {GetterRequest} getterRequest
   * @returns {Observable<HateoasResponse>}
   */
  theGetterHateoas(getterRequest: GetterRequest): Observable<HateoasResponse> {
    return this.http
      .get(this.generateTheGetterURL(getterRequest))
      .map((response: Response) => {
        return <HateoasResponse>response.json();
      });
  }

  generateTheGetterURL(getterRequest: GetterRequest) {
    const pageable = getterRequest.pageable;
    const searchString = getterRequest.searchString;

    let url = this.logModelsURL + 'the-getter';
    if (!!getterRequest.logType) {
      url += '/' + LogType[getterRequest.logType];
    }
    const urlParameters: string[] = [];
    if (!!getterRequest.pageable) {
      urlParameters.push('page=' + pageable.page + '&size=' + pageable.size);
    }
    if (!!getterRequest.directoryID) {
      urlParameters.push('directory-id=' + getterRequest.directoryID);
    }
    if (!!getterRequest.tagID) {
      urlParameters.push('tag-id=' + getterRequest.tagID);
    }
    if (!!getterRequest.millisecondThreshold) {
      urlParameters.push('millisecond-threshold=' + getterRequest.millisecondThreshold);
    }
    if (!!searchString) {
      urlParameters.push('search=' + encodeURIComponent(searchString));
    }
    if (urlParameters.length > 0) {
      url += '?' + urlParameters.join('&');
    }

    return url;
  }

  findOne(id: string, logType: LogType): Observable<LogModel> {
    if (!!id) {
      const url = this.logModelsURL + id + '/' + LogType[logType];
      return this.http
        .get(url)
        .map((response: Response) => {
          const hateoasResponse = <HateoasResponse>response.json();
          return hateoasResponse._embedded.collection[0];
        });
    } else {
      return null;
    }
  }
}
