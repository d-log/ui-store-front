import {Injectable} from '@angular/core';
import {LogModel} from './model/log-model';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {Http, Response} from '@angular/http';
import {HateoasResponse} from '../model/response/hateoas-response';
import 'rxjs/add/operator/map';
import {Pageable} from '../model/pageable';
import {LogType} from './model/extra/log-type';

@Injectable()
export class LogModelService {

  private logModelsURL = 'http://192.168.1.2:8888/api/log/the-getter/';  // URL to web api

  constructor(private http: Http) { }

  /**
   * `?page=0&size=10`
   * @returns {Observable<LogModel[]>}
   */
  theGetterList(millisecondThreshold: number, pageable: Pageable, logType: LogType): Observable<LogModel[]> {
    let url = this.logModelsURL;
    if (logType !== null) {
      url += LogType[LogType.TILE];
    }
    url = url + '?page=' + pageable.page + '&size=' + pageable.size + '&millisecond-threshold=' + millisecondThreshold;
    return this.http
      .get(url)
      .map((response: Response) => {
        const hateoasResponse = <HateoasResponse>response.json();
        return hateoasResponse._embedded.collection;
      });
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
