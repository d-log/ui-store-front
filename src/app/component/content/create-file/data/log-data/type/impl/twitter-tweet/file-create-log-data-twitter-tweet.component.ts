import {AfterViewInit, Component, Input, ViewChild} from '@angular/core';
import {TwitterTweetLogData} from '../../../../../../../../service/core/file/model/extra/data/log/extra/log-data/type/twitter-tweet/twitter-tweet-log-data';
import {TwitterService} from '../../../../../../../../service/twitter/twitter.service';

@Component({
  selector: 'app-file-create-log-data-twitter-tweet',
  templateUrl: './file-create-log-data-twitter-tweet.component.html',
  styleUrls: ['./file-create-log-data-twitter-tweet.component.css']
})
export class FileCreateLogDataTwitterTweetComponent implements AfterViewInit {

  @Input() twitterTweetLogData: TwitterTweetLogData;
  @ViewChild('input') input: any;

  constructor(private twitterService: TwitterService) {
  }

  ngAfterViewInit() {
    if (this.twitterTweetLogData) {
      this.input.nativeElement.value = this.twitterTweetLogData.url;
    }
  }

  onChange(event) {
    const url = (<HTMLInputElement>event.srcElement).value;
    const id = this.twitterService.extractTweetIDFromURL(url);
    if (id !== undefined) {
      this.twitterTweetLogData.url = url;
      this.twitterTweetLogData.tweetID = id;
    } else {
      alert('invalid twitter url');
    }
  }
}
