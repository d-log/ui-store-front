import {AfterViewInit, Component, Input, ViewChild} from '@angular/core';
import {VideoYoutubeLogData} from '../../../../../../../../../service/core/file/model/extra/data/log/extra/log-data/type/video-youtube/video-youtube-log-data';

@Component({
  selector: 'app-file-editor-log-data-video-youtube',
  templateUrl: './file-editor-log-data-video-youtube.component.html',
  styleUrls: ['./file-editor-log-data-video-youtube.component.css']
})
export class FileEditorLogDataVideoYoutubeComponent implements AfterViewInit {

  @Input() videoYoutubeLogData: VideoYoutubeLogData;
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
