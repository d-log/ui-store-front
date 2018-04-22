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

  private logModelsURL = 'http://192.168.1.2:8888/api/log/';  // URL to web api

  constructor(private http: Http) { }

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
    const logType = getterRequest.logType;
    const pageable = getterRequest.pageable;
    const millisecondThreshold = getterRequest.millisecondThreshold;
    const searchString = getterRequest.searchString;

    let url = this.logModelsURL + 'the-getter/';
    if (logType !== null) {
      url += LogType[LogType.TILE];
    }
    url = url + '?page=' + pageable.page + '&size=' + pageable.size + '&millisecond-threshold=' + millisecondThreshold;
    // Returns false for null,undefined,0,000,"",false.
    // Returns true for string "0" and whitespace " "
    if (!!searchString) {
      url = url + '&search=' + encodeURIComponent(searchString);
    }

    return url;
  }

  findOne(id: string): Observable<LogModel> {
    if (!!id) {
      return this.http
        .get(this.logModelsURL + id)
        .map((response: Response) => {
          const hateoasResponse = <HateoasResponse>response.json();
          return hateoasResponse._embedded.collection[0];
        });
    } else {
      return null;
    }
  }
}
