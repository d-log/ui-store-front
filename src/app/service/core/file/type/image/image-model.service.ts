import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {environment} from '../../../../../../environments/environment';
import {FileModel} from '../../model/file-model';
import {HateoasResponse} from '../../../model/response/hateoas-response';

@Injectable()
export class ImageModelService {

  private readonly URL: string;

  constructor(private http: Http) {
    this.URL = environment.coreEndPoint + '/api/image-upload';
  }

  uploadByURL(imageURL: string): Observable<FileModel> | string {
    if (this.validURL(imageURL)) {
      const url = this.URL + '/url';
      return this.http
        .post(url, {url: imageURL})
        .map((response: Response) => {
          const hateoasResponse = <HateoasResponse>response.json();
          return hateoasResponse._embedded.collection[0];
        });
    } else {
      return 'url not valid';
    }
  }

  uploadByFile(files): Observable<FileModel> | string {
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      const file = files[i];

      // Check the file type.
      if (!file.type.match('image.*')) {
        continue;
      }

      // Add the file to the request.
      formData.append('file', file, file.name);
    }
    return this.http
      .post(this.URL + '/file', formData)
      .map((response: Response) => {
        const hateoasResponse = <HateoasResponse>response.json();
        return hateoasResponse._embedded.collection[0];
      });
  }

  validURL(str) {
    try {
      new URL(str);
      return true;
    } catch (_) {
      return false;
    }
  }
}
