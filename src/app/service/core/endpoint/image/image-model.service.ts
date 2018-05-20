import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {environment} from '../../../../../environments/environment';
import {Pageable} from '../../model/request/pageable';
import {ImageModel} from '../../model/data/image/image-model';
import {HateoasResponse} from '../../model/response/hateoas-response';

@Injectable()
export class ImageModelService {

  private readonly URL: string;

  constructor(private http: Http) {
    this.URL = environment.coreEndPoint + '/api/image';
  }

  /**
   * TODO pageable
   * @param {Pageable} pageable
   * @returns {Observable<ImageModel>}
   */
  findAll(pageable: Pageable): Observable<ImageModel[]> {
    return this.http
      .get(this.URL + '/all')
      .map((response: Response) => {
        const hateoasResponse = <HateoasResponse>response.json();
        return hateoasResponse._embedded.collection;
      });
  }
}
