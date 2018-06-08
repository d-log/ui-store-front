import {Component, ComponentFactoryResolver, Input, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {Router} from '@angular/router';
import {LogModel} from '../../../../../../../service/core/model/data/log/log-model';
import {LogContent} from '../../../../../../../service/core/model/data/log/extra/log-content/log-content';
import {ILogContentComponent} from '../../../../../../widget/core/log/log-content/i-log-content-component';
import {TileLogDefaultComponent} from './tile-log-default/tile-log-default.component';
import {ITileLogComponent} from '../i-tile-log-component';
import {LogContentImageDefaultComponent} from '../../../../../../widget/core/log/log-content/image-default/log-content-image-default.component';
import {LogContentTextCodeDefaultComponent} from '../../../../../../widget/core/log/log-content/text-code-default/log-content-text-code-default.component';
import {LogContentTextMarkdownDefaultComponent} from '../../../../../../widget/core/log/log-content/text-markdown-default/log-content-text-markdown-default.component';
import {LogContentTextPlainDefaultComponent} from '../../../../../../widget/core/log/log-content/text-plain-default/log-content-text-plain-default.component';
import {LogContentTextQuoteDefaultComponent} from '../../../../../../widget/core/log/log-content/text-quote-default/log-content-text-quote-default.component';
import {LogContentVideoYoutubeDefaultComponent} from '../../../../../../widget/core/log/log-content/video-youtube-default/log-content-video-youtube-default.component';

@Component({
  selector: 'app-tile-log',
  templateUrl: './tile-log.component.html',
  styleUrls: ['./tile-log.component.css']
})
export class TileLogComponent implements OnInit {
  @Input() logModel: LogModel;
  @ViewChild('vc', {read: ViewContainerRef}) vc: ViewContainerRef;

  showBottom: boolean;

  constructor(private router: Router,
              private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngOnInit() {
    this.showBottom = false;
    this.loadComponent(this.logModel.logContents[0]);
  }

  loadComponent(logContent: LogContent) {
    const component: any = this.getComponent(logContent.logContentType);
    if (component != null) {
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
      const componentRef = this.vc.createComponent(componentFactory);
      (<ILogContentComponent>componentRef.instance).data = logContent.data;
    } else {
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(TileLogDefaultComponent);
      const componentRef = this.vc.createComponent(componentFactory);
      (<ITileLogComponent>componentRef.instance).logModel = this.logModel;
    }
  }

  // TODO turn into service to map logData types to Masonry Tile Components
  private getComponent(logContentType: string) {
    switch (logContentType) {
      case 'ImageInternalLogContent': {
        return LogContentImageDefaultComponent;
      }
      case 'TextCodeLogContent': {
        return LogContentTextCodeDefaultComponent;
      }
      case 'TextMarkdownLogContent': {
        return LogContentTextMarkdownDefaultComponent;
      }
      case 'TextPlainLogContent': {
        return LogContentTextPlainDefaultComponent;
      }
      case 'TextQuoteLogContent': {
        return LogContentTextQuoteDefaultComponent;
      }
      case 'VideoYouTubeLogContent': {
        return LogContentVideoYoutubeDefaultComponent;
      }
    }
  }

  route2FilePage() {
    // window.location.href = '/log-page/' + this.fileModel.id;
    // passing directory id as matrix parameter
    this.router.navigate(['/log-page/' + this.logModel.id]);
  }
}
