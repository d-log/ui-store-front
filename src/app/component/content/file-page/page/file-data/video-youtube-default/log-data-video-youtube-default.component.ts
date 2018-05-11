import {Component, Input} from '@angular/core';
import {VideoYoutubeLogData} from '../../../../../../service/core/file/model/extra/data/log/extra/log-data/type/video-youtube/video-youtube-log-data';

@Component({
  selector: 'app-log-data-video-youtube-default',
  templateUrl: './log-data-video-youtube-default.component.html',
  styleUrls: ['./log-data-video-youtube-default.component.css']
})
export class LogDataVideoYoutubeDefaultComponent {
  @Input() data: VideoYoutubeLogData;
}
