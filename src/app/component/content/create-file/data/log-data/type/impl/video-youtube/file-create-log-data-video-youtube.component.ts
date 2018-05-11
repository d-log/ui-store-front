import {Component, EventEmitter, Input, Output} from '@angular/core';
import {VideoYoutubeLogData} from '../../../../../../../../service/core/file/model/extra/data/log/extra/log-data/type/video-youtube/video-youtube-log-data';

@Component({
  selector: 'app-file-create-log-data-video-youtube',
  templateUrl: './file-create-log-data-video-youtube.component.html',
  styleUrls: ['./file-create-log-data-video-youtube.component.css']
})
export class FileCreateLogDataVideoYoutubeComponent {

  @Input() videoYoutubeLogData: VideoYoutubeLogData;
  @Output() updateFileModel = new EventEmitter<boolean>();

  onChange(event) {
    const element: HTMLInputElement = <HTMLInputElement>event.srcElement;
    this.videoYoutubeLogData.videoID = element.value;
    this.updateFileModel.emit(true);
  }
}
