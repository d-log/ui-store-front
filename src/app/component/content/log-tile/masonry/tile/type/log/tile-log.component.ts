import {Component, ComponentFactoryResolver, Input, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {FileModel} from '../../../../../../../service/core/file/model/file-model';
import {LogData} from '../../../../../../../service/core/file/model/extra/data/log/extra/log-data/log-data';
import {Router} from '@angular/router';
import {TileLogDefaultComponent} from './tile-log-default/tile-log-default.component';
import {ITileComponent} from '../i-tile-component';
import {ILogDataComponent} from '../../../../../../widget/core/log/log-data/i-log-data-component';
import {LogDataImageDefaultComponent} from '../../../../../../widget/core/log/log-data/image-default/log-data-image-default.component';
import {LogDataTextMarkdownDefaultComponent} from '../../../../../../widget/core/log/log-data/text-markdown-default/log-data-text-markdown-default.component';
import {LogDataTextCodeDefaultComponent} from '../../../../../../widget/core/log/log-data/text-code-default/log-data-text-code-default.component';
import {LogDataTextPlainDefaultComponent} from '../../../../../../widget/core/log/log-data/text-plain-default/log-data-text-plain-default.component';
import {LogDataTextQuoteDefaultComponent} from '../../../../../../widget/core/log/log-data/text-quote-default/log-data-text-quote-default.component';
import {LogDataVideoYoutubeDefaultComponent} from '../../../../../../widget/core/log/log-data/video-youtube-default/log-data-video-youtube-default.component';

@Component({
  templateUrl: './tile-log.component.html',
  styleUrls: ['./tile-log.component.css']
})
export class TileLogComponent implements OnInit {
  @Input() fileModel: FileModel;
  @ViewChild('vc', {read: ViewContainerRef}) vc: ViewContainerRef;

  showBottom: boolean;

  constructor(private router: Router,
              private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngOnInit() {
    this.showBottom = this.shouldDisplayBottom(this.fileModel);

    if (!this.loadComponentFromLogData(this.fileModel.data.logDatas[0])) {
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(TileLogDefaultComponent);
      const componentRef = this.vc.createComponent(componentFactory);
      (<ITileComponent>componentRef.instance).fileModel = this.fileModel;
    }
  }

  shouldDisplayBottom(fileModel: FileModel) {
    return false;
  }

  loadComponentFromLogData(logData: LogData) {
    const component: any = this.getComponentFromLogDataType(logData.logDataType);
    if (component != null) {
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
      const componentRef = this.vc.createComponent(componentFactory);
      (<ILogDataComponent>componentRef.instance).data = logData.data;
      return true;
    } else {
      return false;
    }
  }

  // TODO turn into service to map logData types to Masonry Tile Components
  private getComponentFromLogDataType(logDataType: string) {
    switch (logDataType) {
      case 'ImageInternalLogData': {
        return LogDataImageDefaultComponent;
      }
      case 'TextCodeLogData': {
        return LogDataTextCodeDefaultComponent;
      }
      case 'TextMarkdownLogData': {
        return LogDataTextMarkdownDefaultComponent;
      }
      case 'TextPlainLogData': {
        return LogDataTextPlainDefaultComponent;
      }
      case 'TextQuoteLogData': {
        return LogDataTextQuoteDefaultComponent;
      }
      case 'VideoYouTubeLogData': {
        return LogDataVideoYoutubeDefaultComponent;
      }
    }
  }

  route2FilePage() {
    // window.location.href = '/log-page/' + this.fileModel.id;
    // passing directory id as matrix parameter
    this.router.navigate(['/log-page/' + this.fileModel.id]);
  }
}
