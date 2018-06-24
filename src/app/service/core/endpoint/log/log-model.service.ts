import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../../../../environments/environment';
import {LogGetterRequest} from './log-getter-request';
import {LogModel} from '../../model/data/log/log-model';
import {HateoasResponse} from '../../model/response/hateoas-response';
import {SortOrder} from '../../model/request/sort-order';
import {LogDisplayType} from '../../model/data/log/extra/log-display-type';

@Injectable()
export class LogModelService {

  private readonly URL: string;  // URL to web api

  constructor(private http: Http) {
    this.URL = environment.coreEndPoint + '/api/log';
  }

  /**
   * `?page=0&size=10`
   * @returns {Observable<LogModel[]>}
   */
  theGetter(getterRequest: LogGetterRequest): Observable<LogModel[]> {
    return this.http
      .get(this.generateGetterRequestURL(getterRequest))
      .map((response: Response) => {
        const hateoasResponse = <HateoasResponse>response.json();
        return hateoasResponse._embedded.collection;
      });
  }

  generateGetterRequestURL(getterRequest: LogGetterRequest): string {
    const urlParameters: string[] = [];

    if (getterRequest.sorts !== undefined) {
      for (const s of getterRequest.sorts) {
        if (!!s) {
          urlParameters.push('sort=' + s.parameter + ',' + SortOrder[s.order]);
        }
      }
    }
    if (getterRequest.metadataNameLike !== undefined) {
      urlParameters.push('metadataNameLike=' + getterRequest.metadataNameLike);
    }
    if (getterRequest.logDisplayType !== undefined) {
      urlParameters.push('logDisplayType=' + LogDisplayType[getterRequest.logDisplayType]);
    }
    if (getterRequest.pageable !== undefined) {
      urlParameters.push('page=' + getterRequest.pageable.page + '&size=' + getterRequest.pageable.size);
    }
    if (getterRequest.ancestryLogID !== undefined) {
      urlParameters.push('ancestryLogID=' + getterRequest.ancestryLogID);
    }
    if (getterRequest.parentLogID !== undefined) {
      urlParameters.push('parentLogID=' + getterRequest.parentLogID);
    }
    if (getterRequest.tagID !== undefined) {
      urlParameters.push('tagID=' + getterRequest.tagID);
    }
    if (getterRequest.createdBefore !== undefined) {
      urlParameters.push('createdBefore=' + getterRequest.createdBefore);
    }
    if (getterRequest.searchString !== undefined) {
      urlParameters.push('searchString=' + encodeURIComponent(getterRequest.searchString));
    }

    let url = this.URL + '/the-getter';
    if (urlParameters.length > 0) {
      url += '?' + urlParameters.join('&');
    }

    return url;
  }

  findOne(id: string, logDisplayType: LogDisplayType, childLogDisplayType: LogDisplayType): Observable<LogModel> {
    if (!!id) {
      return this.http
        .get(this.URL + '/' + id + '/' + LogDisplayType[logDisplayType], {
          params: {
            'child-log-display-type': LogDisplayType[childLogDisplayType]
          }
        })
        .map((response: Response) => {
          const hateoasResponse = <HateoasResponse>response.json();
          return hateoasResponse._embedded.collection[0];
        });
    } else {
      return null;
    }
  }

  ancestry(id: string): Observable<LogModel[]> {
    return this.http
      .get(this.URL + '/' + id + '/ancestry')
      .map((response: Response) => {
        const hateoasResponse = <HateoasResponse>response.json();
        return hateoasResponse._embedded.collection;
      });
  }

  getRoot(logDisplayType: LogDisplayType, childLogDisplayType: LogDisplayType): Observable<LogModel> {
    return this.http
      .get(this.URL + '/root' + '/' + LogDisplayType[logDisplayType], {
        params: {
          'child-log-display-type': LogDisplayType[childLogDisplayType]
        }
      })
      .map((response: Response) => {
        const hateoasResponse = <HateoasResponse>response.json();
        return hateoasResponse._embedded.collection[0];
      });
  }

  findChildren(id: string): Observable<LogModel[]> {
    if (!!id) {
      return this.http
        .get(this.URL + '/' + id + '/children/1')
        .map((response: Response) => {
          const hateoasResponse = <HateoasResponse>response.json();
          return hateoasResponse._embedded.collection;
        });
    } else {
      return null;
    }
  }

  findChildrenOfRoot(): Observable<LogModel[]> {
    return this.http
      .get(this.URL + '/root/children/1')
      .map((response: Response) => {
        const hateoasResponse = <HateoasResponse>response.json();
        return hateoasResponse._embedded.collection;
      });
  }

  assignNewParent(id: string, parentID: string): Observable<LogModel> {
    return this.http
      .put(this.URL + '/' + id + '/parent/' + parentID, null)
      .map((response: Response) => {
        const hateoasResponse = <HateoasResponse>response.json();
        return hateoasResponse._embedded.collection[0];
      });
  }

  create(logFileModel: LogModel): Observable<LogModel> {
    logFileModel.id = undefined;
    return this.http
      .post(this.URL, logFileModel)
      .map((response: Response) => {
        const hateoasResponse = <HateoasResponse>response.json();
        return hateoasResponse._embedded.collection[0];
      });
  }

  update(logFileModel: LogModel): Observable<LogModel> {
    return this.http
      .put(this.URL, logFileModel)
      .map((response: Response) => {
        const hateoasResponse = <HateoasResponse>response.json();
        return hateoasResponse._embedded.collection[0];
      });
  }
}
