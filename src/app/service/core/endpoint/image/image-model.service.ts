import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {environment} from '../../../../../environments/environment';
import {ImageModel} from '../../model/data/image/image-model';
import {HateoasResponse} from '../../model/response/hateoas-response';
import {SortOrder} from '../../model/request/sort-order';
import {ImageGetterRequest} from './image-getter-request';

@Injectable()
export class ImageModelService {

  private readonly URL: string;

  constructor(private http: Http) {
    this.URL = environment.coreEndPoint + '/api/image';
  }

  theGetter(getterRequest: ImageGetterRequest): Observable<ImageModel[]> {
    return this.http
      .get(this.generateGetterRequestURL(getterRequest))
      .map((response: Response) => {
        const hateoasResponse = <HateoasResponse>response.json();
        return hateoasResponse._embedded.collection;
      });
  }

  generateGetterRequestURL(getterRequest: ImageGetterRequest): string {
    const urlParameters: string[] = [];

    if (getterRequest.sorts !== undefined) {
      for (const s of getterRequest.sorts) {
        if (!!s) {
          urlParameters.push('sort=' + s.parameter + ',' + SortOrder[s.order]);
        }
      }
    }
    if (getterRequest.pageable !== undefined) {
      urlParameters.push('page=' + getterRequest.pageable.page + '&size=' + getterRequest.pageable.size);
    }
    if (getterRequest.createdBefore !== undefined) {
      urlParameters.push('createdBefore=' + getterRequest.createdBefore);
    }

    let url = this.URL;
    if (urlParameters.length > 0) {
      url += '?' + urlParameters.join('&');
    }

    return url;
  }
}
