import {Injectable} from '@angular/core';
import {FileModel} from '../../model/file-model';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../../../../../environments/environment';
import {Http, Response} from '@angular/http';
import {HateoasResponse} from '../../../model/response/hateoas-response';
import 'rxjs/add/operator/map';

@Injectable()
export class TagModelService {

  private readonly URL: string;

  constructor(private http: Http) {
    this.URL = environment.coreEndPoint + '/api/file/tag';
  }

  create(tagFileModel: FileModel): Observable<FileModel> {
    tagFileModel.id = undefined;
    return this.http
      .post(this.URL, tagFileModel)
      .map((response: Response) => {
        const hateoasResponse = <HateoasResponse>response.json();
        return hateoasResponse._embedded.collection[0];
      });
  }

  update(tagFileModel: FileModel): Observable<FileModel> {
    return this.http
      .put(this.URL, tagFileModel)
      .map((response: Response) => {
        const hateoasResponse = <HateoasResponse>response.json();
        return hateoasResponse._embedded.collection[0];
      });
  }
}
