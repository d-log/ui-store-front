import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http, Response} from '@angular/http';
import {HateoasResponse} from '../model/response/hateoas-response';
import 'rxjs/add/operator/map';
import {DirectoryModel} from './model/directory-model';

@Injectable()
export class DirectoryModelService {

  private logModelsURL = 'http://core.marcuschiu.com/api/directory/';  // URL to web api

  constructor(private http: Http) {
  }

  findOne(id: string): Observable<DirectoryModel> {
    if (!!id) {
      const url = this.logModelsURL + id;
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

  getRoot(): Observable<DirectoryModel> {
    const url = this.logModelsURL + 'root';
    return this.http
      .get(url)
      .map((response: Response) => {
        const hateoasResponse = <HateoasResponse>response.json();
        return hateoasResponse._embedded.collection[0];
      });
  }

  findChildren(id: string): Observable<DirectoryModel[]> {
    if (!!id) {
      const url = this.logModelsURL + id + '/children/1';
      return this.http
        .get(url)
        .map((response: Response) => {
          const hateoasResponse = <HateoasResponse>response.json();
          return hateoasResponse._embedded.collection;
        });
    } else {
      return null;
    }
  }

  findChildrenOfRoot(): Observable<DirectoryModel[]> {
    const url = this.logModelsURL + 'root/children/1';
    return this.http
      .get(url)
      .map((response: Response) => {
        const hateoasResponse = <HateoasResponse>response.json();
        return hateoasResponse._embedded.collection;
      });
  }
}