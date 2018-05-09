import {Component, Input, OnInit} from '@angular/core';
import {LogData} from '../../../../../../service/core/file/model/extra/data/log/extra/log-data';

@Component({
  templateUrl: './log-data-video-youtube-default.component.html',
  styleUrls: ['./log-data-video-youtube-default.component.css']
})
export class LogDataVideoYoutubeDefaultComponent implements OnInit {

  YOUTUBE_EMBEDDED_URL = 'https://www.youtube.com/embed/';
  @Input() logData: LogData;

  url: string;

  ngOnInit() {
    const data = this.logData.data;
    this.url = this.YOUTUBE_EMBEDDED_URL + data.videoID;
  }

}
