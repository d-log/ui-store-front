import {Component, Input} from '@angular/core';
import {VideoYoutubeLogContent} from '../../../../../../service/core/file/model/extra/data/log/extra/log-data/type/video-youtube/video-youtube-log-content';

@Component({
  selector: 'app-log-content-video-youtube-default',
  templateUrl: './log-content-video-youtube-default.component.html',
  styleUrls: ['./log-content-video-youtube-default.component.css']
})
export class LogContentVideoYoutubeDefaultComponent {
  @Input() data: VideoYoutubeLogContent;
}
