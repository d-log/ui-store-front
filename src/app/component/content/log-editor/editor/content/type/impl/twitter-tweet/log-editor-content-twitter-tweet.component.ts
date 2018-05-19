import {AfterViewInit, Component, Input, ViewChild} from '@angular/core';
import {TwitterTweetLogContent} from '../../../../../../../../service/core/file/model/extra/data/log/extra/log-data/type/twitter-tweet/twitter-tweet-log-content';
import {TwitterService} from '../../../../../../../../service/twitter/twitter.service';

@Component({
  selector: 'app-log-editor-content-twitter-tweet',
  templateUrl: './log-editor-content-twitter-tweet.component.html',
  styleUrls: ['./log-editor-content-twitter-tweet.component.css']
})
export class LogEditorContentTwitterTweetComponent implements AfterViewInit {

  @Input() twitterTweetLogData: TwitterTweetLogContent;
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
