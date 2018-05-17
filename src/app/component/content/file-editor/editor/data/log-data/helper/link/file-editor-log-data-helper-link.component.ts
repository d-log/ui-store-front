import {AfterViewInit, Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {LogFileData} from '../../../../../../../../service/core/file/model/extra/data/log/log-file-data';
import {LogData} from '../../../../../../../../service/core/file/model/extra/data/log/extra/log-data/log-data';
import {VideoYoutubeLogData} from '../../../../../../../../service/core/file/model/extra/data/log/extra/log-data/type/video-youtube/video-youtube-log-data';
import {TwitterTweetLogData} from '../../../../../../../../service/core/file/model/extra/data/log/extra/log-data/type/twitter-tweet/twitter-tweet-log-data';
import {TwitterService} from '../../../../../../../../service/twitter/twitter.service';

@Component({
  selector: 'app-file-editor-log-data-helper-link',
  templateUrl: './file-editor-log-data-helper-link.component.html',
  styleUrls: ['./file-editor-log-data-helper-link.component.css']
})
export class FileEditorLogDataHelperLinkComponent implements AfterViewInit {
  @Input() data: LogFileData;
  @Output() closeHelper = new EventEmitter<boolean>();
  @ViewChild('input') inputElement;

  link: string;

  constructor(private twitterService: TwitterService) {
  }

  ngAfterViewInit() {
    this.inputElement.nativeElement.focus();
  }

  onCloseHelper() {
    this.closeHelper.emit(true);
  }

  onKeyPress(event: any) {
    if (event.keyCode === 13) {
      this.submitLink();
    }
  }

  submitLink() {
    const hostname = this.extractRootDomain(this.link);
    switch (hostname) {
      case 'youtube.com':
        this.addVideoYouTube(this.link);
        break;
      case 'twitter.com':
        this.addTwitter(this.link);
        break;
      default:
        alert('we do not support: ' + hostname);
    }
  }

  // To address those who want the "root domain," use this function:
  extractRootDomain(url) {
    let domain = this.extractHostname(url);
    const splitArr = domain.split('.');
    const arrLen = splitArr.length;

    // extracting the root domain here
    // if there is a subdomain
    if (arrLen > 2) {
      domain = splitArr[arrLen - 2] + '.' + splitArr[arrLen - 1];
      // check to see if it's using a Country Code Top Level Domain (ccTLD) (i.e. ".me.uk")
      if (splitArr[arrLen - 2].length === 2 && splitArr[arrLen - 1].length === 2) {
        // this is using a ccTLD
        domain = splitArr[arrLen - 3] + '.' + domain;
      }
    }
    return domain;
  }

  extractHostname(url) {
    let hostname;
    // find & remove protocol (http, ftp, etc.) and get hostname
    if (url.indexOf('://') > -1) {
      hostname = url.split('/')[2];
    } else {
      hostname = url.split('/')[0];
    }

    // find & remove port number
    hostname = hostname.split(':')[0];
    // find & remove "?"
    hostname = hostname.split('?')[0];

    return hostname;
  }

  addVideoYouTube(link: string) {
    const videoID = new URL(link).searchParams.get('v');
    if (videoID !== undefined) {
      const videoYouTubeLogData = new VideoYoutubeLogData();
      videoYouTubeLogData.videoID = videoID;
      this.data.logDatas.push(new LogData('VideoYouTubeLogData', this.generateDefaultCSS(), videoYouTubeLogData));
      this.onCloseHelper();
    } else {
      alert('youtube link missing URL parameter \'v\'');
    }
  }

  addTwitter(link: string) {
    const id = this.twitterService.extractTweetIDFromURL(link);
    if (id !== undefined) {
      const twitterTweetLogData = new TwitterTweetLogData();
      twitterTweetLogData.url = link;
      twitterTweetLogData.tweetID = id;
      this.data.logDatas.push(new LogData('TwitterTweetLogData', this.generateDefaultCSS(), twitterTweetLogData));
      this.onCloseHelper();
    } else {
      alert('error twitter url');
    }
  }

  generateDefaultCSS() {
    return {
      'margin-top': '20px',
      'margin-left': 'auto',
      'margin-right': 'auto',
      'max-width': '800px'
    };
  }
}
