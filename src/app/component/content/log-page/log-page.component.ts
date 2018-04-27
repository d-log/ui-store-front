import {Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {LogModel} from '../../../service/core/log/model/log-model';
import {ActivatedRoute} from '@angular/router';
import {LogModelService} from '../../../service/core/log/log-model.service';
import {LogData} from '../../../service/core/log/model/extra/logdata/log-data';
import 'rxjs/add/operator/switchMap';
import {LogDataImageDefaultComponent} from './log-data/image-default/log-data-image-default.component';
import {LogDataTextPlainDefaultComponent} from './log-data/text-plain-default/log-data-text-plain-default.component';
import {LogDataVideoYoutubeDefaultComponent} from './log-data/video-youtube-default/log-data-video-youtube-default.component';
import {LogDataComponentTwo} from './log-data/log-data-component-two';
import {LogType} from '../../../service/core/log/model/extra/log-type';
import {TagModel} from '../../../service/core/tag/model/tag-model';
import {DirectoryModel} from '../../../service/core/directory/model/directory-model';
import {LogDataTextMarkdownDefaultComponent} from './log-data/text-markdown-default/log-data-text-markdown-default.component';
import {LogDataDefaultDefaultComponent} from './log-data/default-default/log-data-default-default.component';
import {LogDataTextQuoteDefaultComponent} from './log-data/text-quote-default/log-data-text-quote-default.component';
import {LogDataTextCodeDefaultComponent} from './log-data/text-code-default/log-data-text-code-default.component';

@Component({
  selector: 'app-log-page',
  templateUrl: './log-page.component.html',
  styleUrls: ['./log-page.component.css']
})
export class LogPageComponent implements OnInit {
  @ViewChild('vc', {read: ViewContainerRef}) _container: ViewContainerRef;

  logModel: LogModel;

  title: string;
  description: string;
  createdDateString: string;
  lastUpdatedDateString: string;
  isEmptyResponse: boolean;
  id: string;
  directoryModels: DirectoryModel[];
  tagModels: TagModel[];

  constructor(private logLightService: LogModelService,
              private activatedRoute: ActivatedRoute,
              private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngOnInit() {
    this.directoryModels = [];
    this.tagModels = [];
    this.isEmptyResponse = false;
    // grab value of url param `id` in `localhost:4200/log-page/:id
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    if (!!this.id) {
      this.logLightService.findOne(this.id, LogType.PAGE).subscribe(logModel => {
        if (logModel !== null) {
          this.logModel = logModel;
          this.title = logModel.title;
          this.description = logModel.description;
          this.createdDateString = new Date(logModel.metadata.created).toDateString();
          this.lastUpdatedDateString = new Date(logModel.metadata.lastUpdated).toDateString();
          this.directoryModels = logModel.directoryModels;
          this.tagModels = logModel.tagModels;
          this.displayLog(logModel);
        }
      });
    }
  }

  displayLog(logModel: LogModel) {
    for (const logData of logModel.logDatas) {
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
