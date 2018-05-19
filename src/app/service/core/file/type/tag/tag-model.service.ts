import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../../../../../environments/environment';
import {Http, Response} from '@angular/http';
import {HateoasResponse} from '../../../model/response/hateoas-response';
import 'rxjs/add/operator/map';
import {TagModel} from '../../model/extra/data/tag/tag-model';

@Injectable()
export class TagModelService {

  private readonly URL: string;

  constructor(private http: Http) {
    this.URL = environment.coreEndPoint + '/api/tag';
  }

  findAll(): Observable<TagModel[]> {
    return this.http
      .get(this.URL + 'all')
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
