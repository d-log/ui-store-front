import {Component, Input, OnInit} from '@angular/core';
import {FileModel} from '../../../../../../../../service/core/file/model/file-model';

@Component({
  selector: 'app-masonry-tile-you-tube-default',
  templateUrl: './masonry-tile-video-youtube-default.component.html',
  styleUrls: ['./masonry-tile-video-youtube-default.component.css']
})
export class MasonryTileVideoYoutubeDefaultComponent implements OnInit {

  YOUTUBE_EMBEDDED_URL = 'https://www.youtube.com/embed/';
  @Input() fileModel: FileModel;

  url: string;

  ngOnInit() {
    const data = this.fileModel.data.logDatas[0].data;
    this.url = this.YOUTUBE_EMBEDDED_URL + data.videoID;
  }

}
