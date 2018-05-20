import {AfterViewInit, Component, Input, ViewChild} from '@angular/core';
import {VideoYoutubeLogContent} from '../../../../../../../../service/core/model/data/log/extra/log-content/type/video-youtube/video-youtube-log-content';

@Component({
  selector: 'app-log-editor-content-video-youtube',
  templateUrl: './log-editor-content-video-youtube.component.html',
  styleUrls: ['./log-editor-content-video-youtube.component.css']
})
export class LogEditorContentVideoYoutubeComponent implements AfterViewInit {

  @Input() videoYoutubeLogData: VideoYoutubeLogContent;
  @ViewChild('input') input: any;

  ngAfterViewInit() {
    if (this.videoYoutubeLogData) {
      this.input.nativeElement.value = 'https://www.youtube.com/watch?v=' + this.videoYoutubeLogData.videoID;
    }
  }

  onChange(event) {
    const element: HTMLInputElement = <HTMLInputElement>event.srcElement;
    this.videoYoutubeLogData.videoID = new URL(element.value).searchParams.get('v');
  }
}
