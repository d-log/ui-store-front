import {Component, ComponentFactoryResolver, Input, ViewChild, ViewContainerRef} from '@angular/core';
import 'rxjs/add/operator/switchMap';
import {LogData} from '../../../../../service/core/file/model/extra/data/log/extra/log-data/log-data';
import {LogDataImageDefaultComponent} from './image-default/log-data-image-default.component';
import {LogDataTextPlainDefaultComponent} from './text-plain-default/log-data-text-plain-default.component';
import {LogDataVideoYoutubeDefaultComponent} from './video-youtube-default/log-data-video-youtube-default.component';
import {LogDataTextMarkdownDefaultComponent} from './text-markdown-default/log-data-text-markdown-default.component';
import {LogDataTextQuoteDefaultComponent} from './text-quote-default/log-data-text-quote-default.component';
import {LogDataTextCodeDefaultComponent} from './text-code-default/log-data-text-code-default.component';
import {LogDataDefaultDefaultComponent} from './default-default/log-data-default-default.component';
import {LogDataComponentTwo} from './log-data-component-two';

@Component({
  selector: 'app-log-data-type',
  templateUrl: './log-data-type.component.html',
  styleUrls: ['./log-data-type.component.css']
})
export class LogDataTypeComponent {
  @Input() set logData(logData: LogData) {
    this.initialize(logData);
  }

  _logData: LogData;

  @ViewChild('vc', {read: ViewContainerRef}) _container: ViewContainerRef;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
  }

  initialize(logData: LogData) {
    this._logData = logData;
    this._container.clear();
    const component = this.getComponentFromData(logData);
    this.loadComponent(logData, component);
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
