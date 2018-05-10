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

  @ViewChild('vc', {read: ViewContainerRef}) _container: ViewContainerRef;
  displayCommentSection: boolean;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
  }

  initialize(fileModel: FileModel) {
    this._fileModel = fileModel;
    this.displayCommentSection = false;
    this._container.clear();

    if (!!fileModel) {
      if (!!fileModel.metadata) {
        this.displayCommentSection = fileModel.metadata.displayCommentSection;
      } else {
        this.displayCommentSection = false;
      }
      this.displayLog(fileModel);
    }
  }

  displayLog(fileModel: FileModel) {
    if (!!fileModel.data) {
      if (!!fileModel.data.logDatas) {
        for (const logData of fileModel.data.logDatas) {
          const component = this.getComponentFromData(logData);
          this.loadComponent(logData, component);
        }
      }
    }
  }

  public getComponentFromData(logData: LogData) {
    switch (logData.logDataType) {
      case 'ImageInternalLogData': {
        return LogDataImageDefaultComponent;
      }
      case 'TextPlainLogData': {
        return LogDataTextPlainDefaultComponent;
      }
      case 'VideoYouTubeLogData': {
        return LogDataVideoYoutubeDefaultComponent;
      }
      case 'TextMarkdownLogData': {
        return LogDataTextMarkdownDefaultComponent;
      }
      case 'TextQuoteLogData': {
        return LogDataTextQuoteDefaultComponent;
      }
      case 'TextCodeLogData': {
        return LogDataTextCodeDefaultComponent;
      }
    }
    return LogDataDefaultDefaultComponent;
  }

  loadComponent(logData: LogData, component: any) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
    const componentRef = this._container.createComponent(componentFactory);
    (<LogDataComponentTwo>componentRef.instance).logData = logData;
  }
}
