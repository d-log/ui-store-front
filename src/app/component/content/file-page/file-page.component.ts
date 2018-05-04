import {Component, ComponentFactoryResolver, ViewChild, ViewContainerRef} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {LogDataImageDefaultComponent} from './file-data/image-default/log-data-image-default.component';
import {LogDataTextPlainDefaultComponent} from './file-data/text-plain-default/log-data-text-plain-default.component';
import {LogDataVideoYoutubeDefaultComponent} from './file-data/video-youtube-default/log-data-video-youtube-default.component';
import {LogDataComponentTwo} from './file-data/log-data-component-two';
import {LogDataTextMarkdownDefaultComponent} from './file-data/text-markdown-default/log-data-text-markdown-default.component';
import {LogDataDefaultDefaultComponent} from './file-data/default-default/log-data-default-default.component';
import {LogDataTextQuoteDefaultComponent} from './file-data/text-quote-default/log-data-text-quote-default.component';
import {LogDataTextCodeDefaultComponent} from './file-data/text-code-default/log-data-text-code-default.component';
import {FileModel} from '../../../service/core/file/model/file-model';
import {LogType} from '../../../service/core/file/model/extra/data/logdata/log-type';
import {LogData} from '../../../service/core/file/model/extra/data/logdata/log-data';
import {LogModelService} from '../../../service/core/file/type/log/log-model.service';

@Component({
  selector: 'app-file-page',
  templateUrl: './file-page.component.html',
  styleUrls: ['./file-page.component.css']
})
export class FilePageComponent {
  @ViewChild('vc', {read: ViewContainerRef}) _container: ViewContainerRef;

  fileModel: FileModel;
  id: string;

  constructor(private logFileService: LogModelService,
              private activatedRoute: ActivatedRoute,
              private componentFactoryResolver: ComponentFactoryResolver) {
    activatedRoute.params.subscribe(val => this.initialize());
  }

  initialize() {
    // grab value of url param `id` in `localhost:4200/log-page/:id
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    if (!!this.id) {
      this.logFileService.findOne(this.id, LogType.PAGE).subscribe((fileModel: FileModel) => {
        if (fileModel !== null) {
          this.fileModel = fileModel;
          this.displayLog(fileModel);
        }
      });
    }
  }

  displayLog(fileModel: FileModel) {
    this._container.clear();
    for (const logData of fileModel.data.logDatas) {
      const component = this.getComponentFromData(logData);
      this.loadComponent(logData, component);
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
