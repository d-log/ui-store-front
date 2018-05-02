import {Component, ComponentFactoryResolver, ViewChild, ViewContainerRef} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {LogDataImageDefaultComponent} from './log-data/image-default/log-data-image-default.component';
import {LogDataTextPlainDefaultComponent} from './log-data/text-plain-default/log-data-text-plain-default.component';
import {LogDataVideoYoutubeDefaultComponent} from './log-data/video-youtube-default/log-data-video-youtube-default.component';
import {LogDataComponentTwo} from './log-data/log-data-component-two';
import {LogDataTextMarkdownDefaultComponent} from './log-data/text-markdown-default/log-data-text-markdown-default.component';
import {LogDataDefaultDefaultComponent} from './log-data/default-default/log-data-default-default.component';
import {LogDataTextQuoteDefaultComponent} from './log-data/text-quote-default/log-data-text-quote-default.component';
import {LogDataTextCodeDefaultComponent} from './log-data/text-code-default/log-data-text-code-default.component';
import {FileModel} from '../../../service/core/file/model/file-model';
import {LogType} from '../../../service/core/file/model/extra/data/logdata/log-type';
import {LogData} from '../../../service/core/file/model/extra/data/logdata/log-data';
import {LogModelService} from '../../../service/core/log/log-model.service';

@Component({
  selector: 'app-log-page',
  templateUrl: './log-page.component.html',
  styleUrls: ['./log-page.component.css']
})
export class LogPageComponent {
  @ViewChild('vc', {read: ViewContainerRef}) _container: ViewContainerRef;

  fileModel: FileModel;
  title: string;
  description: string;
  createdDateString: string;
  lastUpdatedDateString: string;
  isEmptyResponse: boolean;
  id: string;
  logDirectoryFileModels: FileModel[];
  tagFileModels: FileModel[];

  constructor(private logFileService: LogModelService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private componentFactoryResolver: ComponentFactoryResolver) {
    activatedRoute.params.subscribe(val => this.initialize());
  }

  viewDirectoryInContent(logDirectoryFileID: string) {
    // passing directory id as matrix parameter
    this.router.navigate(['log-tile/archive', {'directory-id': logDirectoryFileID}]);
  }

  viewTagInContent(tagFileID: string) {
    // passing tag id as matrix parameter
    this.router.navigate(['log-tile/archive', {'tag-id': tagFileID}]);
  }

  initialize() {
    this.logDirectoryFileModels = [];
    this.tagFileModels = [];
    this.isEmptyResponse = false;
    // grab value of url param `id` in `localhost:4200/log-page/:id
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    if (!!this.id) {
      this.logFileService.findOne(this.id, LogType.PAGE).subscribe((fileModel: FileModel) => {
        if (fileModel !== null) {
          this.fileModel = fileModel;
          this.title = fileModel.metadata.name;
          this.description = fileModel.metadata.description;
          this.createdDateString = new Date(fileModel.metadata.created).toDateString();
          this.lastUpdatedDateString = new Date(fileModel.metadata.lastUpdated).toDateString();
          this.logDirectoryFileModels = fileModel.data.parentLogDirectoryFileDatas;
          this.tagFileModels = fileModel.data.tagFileDatas;
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
