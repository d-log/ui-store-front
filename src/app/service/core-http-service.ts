import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';

@Injectable()
export class CoreHttpService {

  protected baseUrl: 'http://localhost:8888/api';

  constructor(private http: Http) {}

  public get(relativeUrl: string): Observable<any> {
    return this.http.get(this.baseUrl + relativeUrl);
    // as you see, the simple toJson mapping logic also delegates here
  }
}
