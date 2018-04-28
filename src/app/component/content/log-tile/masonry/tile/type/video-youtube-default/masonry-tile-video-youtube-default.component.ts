import {Component, Input, OnInit} from '@angular/core';
import {LogModel} from '../../../../../../../service/core/log/model/log-model';

@Component({
  selector: 'app-masonry-tile-you-tube-default',
  templateUrl: './masonry-tile-video-youtube-default.component.html',
  styleUrls: ['./masonry-tile-video-youtube-default.component.css']
})
export class MasonryTileVideoYoutubeDefaultComponent implements OnInit {

  YOUTUBE_EMBEDDED_URL = 'https://www.youtube.com/embed/';
  @Input() logModel: LogModel;

  url: string;

  ngOnInit() {
    const data = this.logModel.logDatas[0].data;
    this.url = this.YOUTUBE_EMBEDDED_URL + data.videoID;
  }

}
