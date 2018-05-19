import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../../../../../environments/environment';
import {Http, Response} from '@angular/http';
import {HateoasResponse} from '../../../model/response/hateoas-response';
import 'rxjs/add/operator/map';
import {TagModel} from '../../model/extra/data/tag/tag-model';
import {SortOrder} from '../../../model/request/sort-order';
import {TagGetterRequest} from './tag-getter-request';

@Injectable()
export class TagModelService {

  private readonly URL: string;

  constructor(private http: Http) {
    this.URL = environment.coreEndPoint + '/api/tag';
  }

  theGetter(getterRequest: TagGetterRequest): Observable<TagModel[]> {
    return this.http
      .get(this.generateGetterRequestURL(getterRequest))
      .map((response: Response) => {
        const hateoasResponse = <HateoasResponse>response.json();
        return hateoasResponse._embedded.collection;
      });
  }

  generateGetterRequestURL(getterRequest: TagGetterRequest): string {
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

  findAll(): Observable<TagModel[]> {
    return this.http
      .get(this.URL + '/all')
      .map((response: Response) => {
        const hateoasResponse = <HateoasResponse>response.json();
        return hateoasResponse._embedded.collection;
      });
  }

  create(tagModel: TagModel): Observable<TagModel> {
    tagModel.id = undefined;
    return this.http
      .post(this.URL, tagModel)
      .map((response: Response) => {
        const hateoasResponse = <HateoasResponse>response.json();
        return hateoasResponse._embedded.collection[0];
      });
  }

  update(tagModel: TagModel): Observable<TagModel> {
    return this.http
      .put(this.URL, tagModel)
      .map((response: Response) => {
        const hateoasResponse = <HateoasResponse>response.json();
        return hateoasResponse._embedded.collection[0];
      });
  }
}
