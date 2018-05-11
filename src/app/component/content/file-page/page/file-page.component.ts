import {Component, ComponentFactoryResolver, Input, ViewChild, ViewContainerRef} from '@angular/core';
import 'rxjs/add/operator/switchMap';
import {FileModel} from '../../../../service/core/file/model/file-model';
import {LogData} from '../../../../service/core/file/model/extra/data/log/extra/log-data/log-data';
import {LogDataTextPlainDefaultComponent} from './file-data/text-plain-default/log-data-text-plain-default.component';
import {LogDataVideoYoutubeDefaultComponent} from './file-data/video-youtube-default/log-data-video-youtube-default.component';
import {LogDataTextMarkdownDefaultComponent} from './file-data/text-markdown-default/log-data-text-markdown-default.component';
import {LogDataImageDefaultComponent} from './file-data/image-default/log-data-image-default.component';
import {LogDataDefaultDefaultComponent} from './file-data/default-default/log-data-default-default.component';
import {LogDataTextCodeDefaultComponent} from './file-data/text-code-default/log-data-text-code-default.component';
import {LogDataTextQuoteDefaultComponent} from './file-data/text-quote-default/log-data-text-quote-default.component';
import {LogDataComponentTwo} from './file-data/log-data-component-two';

@Component({
  selector: 'app-file-page',
  templateUrl: './file-page.component.html',
  styleUrls: ['./file-page.component.css']
})
export class FilePageComponent {
  @Input() set fileModel(fileModel: FileModel) {
    this.initialize(fileModel);
  }

  _fileModel: FileModel;
  displayCommentSection: boolean;
  logDatas: LogData[];

  initialize(fileModel: FileModel) {
    this._fileModel = fileModel;
    this.displayCommentSection = false;
    this.logDatas = [];

    if (!!fileModel) {
      if (!!fileModel.metadata) {
        this.displayCommentSection = fileModel.metadata.displayCommentSection;
      } else {
        this.displayCommentSection = false;
      }
      if (!!fileModel.data.logDatas) {
        this.logDatas = fileModel.data.logDatas;
      }
    }
  }
}
