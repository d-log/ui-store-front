import {Injectable} from '@angular/core';
import {FileModel} from '../../model/file-model';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../../../../../environments/environment';
import {Http, Response} from '@angular/http';
import {HateoasResponse} from '../../../model/response/hateoas-response';
import {Pageable} from '../../../model/request/pageable';
import 'rxjs/add/operator/map';
import {Sort} from '../../../model/request/sort';
import {SortOrder} from '../../../model/request/sort-order';

@Injectable()
export class TagModelService {

  private readonly tagURL: string;

  constructor(private http: Http) {
    this.tagURL = environment.coreEndPoint + '/api/file/tag';
  }

  findOne(id: string): Observable<FileModel> {
    if (!!id) {
      const url = this.tagURL + '/' + id;
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

  findAll(pageable: Pageable, sorts: Sort[]): Observable<FileModel[]> {
    const url = this.tagURL + '/all' + this.generateURLParameters(pageable, sorts);
    return this.http
      .get(url)
      .map((response: Response) => {
        const hateoasResponse = <HateoasResponse>response.json();
        return hateoasResponse._embedded.collection;
      });
  }

  private generateURLParameters(pageable: Pageable, sorts: Sort[]): string {
    const urlParameters: string[] = [];

    if (!!sorts) {
      for (const s of sorts) {
        if (!!s) {
          urlParameters.push('sort=' + s.parameter + ',' + SortOrder[s.order]);
        }
      }
    }
    if (!!pageable) {
      urlParameters.push('page=' + pageable.page + '&size=' + pageable.size);
    }

    let url = '';
    if (urlParameters.length > 0) {
      url += '?' + urlParameters.join('&');
    }
    // console.log(url);

    return url;
  }
}
