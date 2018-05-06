import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {LogType} from '../../model/extra/data/logdata/log-type';
import {FileModel} from '../../model/file-model';
import {HateoasResponse} from '../../../model/response/hateoas-response';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../../../../../environments/environment';


@Injectable()
export class LogModelService {

  private readonly logURL: string;  // URL to web api

  constructor(private http: Http) {
    this.logURL = environment.coreEndPoint + '/api/file/log';
  }

  findOne(id: string, logType: LogType): Observable<FileModel> {
    if (!!id) {
      const url = this.logURL + '/' + id + '/' + LogType[logType];
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
