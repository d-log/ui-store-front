import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {OEmbedResponse} from './extra/o-embed-response';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class TwitterService {

  constructor(private http: Http) {
  }

  getEmbeddedHTML(twitterURL: string): Observable<string> {
    const url = 'https://publish.twitter.com/oembed';
    return this.http
      .get(url, {url: twitterURL})
      .map((response: Response) => {
        const oEmbedResponse = <OEmbedResponse>response.json();
        return oEmbedResponse.html;
      });
  }

  extractTweetIDFromURL(url: string): string {
    return url.substr(url.lastIndexOf('/') + 1);
  }
}
