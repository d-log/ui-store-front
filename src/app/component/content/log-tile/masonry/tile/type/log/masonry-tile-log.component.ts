import {Component, ComponentFactoryResolver, Input, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {FileModel} from '../../../../../../../service/core/file/model/file-model';
import {LogData} from '../../../../../../../service/core/file/model/extra/data/logdata/log-data';
import {MasonryTileImageDefaultComponent} from './image-default/masonry-tile-image-default.component';
import {MasonryTileTextPlainDefaultComponent} from './text-plain-default/masonry-tile-text-plain-default.component';
import {MasonryTileDefaultTileDefaultComponent} from './default-tile-default/masonry-tile-default-tile-default.component';
import {MasonryTileTextMarkdownDefaultComponent} from './text-markdown-default/masonry-tile-text-markdown-default.component';
import {MasonryTileTextQuoteDefaultComponent} from './text-quote-default/masonry-tile-text-quote-default.component';
import {MasonryTileVideoYoutubeDefaultComponent} from './video-youtube-default/masonry-tile-video-youtube-default.component';
import {MasonryTileComponentTwo} from '../masonry-tile-component-two';
import {Router} from '@angular/router';

@Component({
  templateUrl: './masonry-tile-log.component.html',
  styleUrls: ['./masonry-tile-log.component.css']
})
export class MasonryTileLogComponent implements OnInit {
  @Input() fileModel: FileModel;
  @ViewChild('vc', {read: ViewContainerRef}) _container: ViewContainerRef;

  constructor(private router: Router,
              private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngOnInit() {
    const component = this.getComponentFromData(this.fileModel.data.logDatas[0]);
    this.loadComponent(this.fileModel, component);
  }

  // TODO turn into service to map logData types to Masonry Tile Components
  public getComponentFromData(logData: LogData) {
    switch (logData.logDataType) {
      case 'ImageInternalLogData': {
        return MasonryTileImageDefaultComponent;
      }
      case 'TextPlainLogData': {
        return MasonryTileTextPlainDefaultComponent;
      }
      case 'VideoYouTubeLogData': {
        return MasonryTileVideoYoutubeDefaultComponent;
      }
      case 'TextQuoteLogData': {
        return MasonryTileTextQuoteDefaultComponent;
      }
      case 'TextMarkdownLogData': {
        return MasonryTileTextMarkdownDefaultComponent;
      }
    }
    return MasonryTileDefaultTileDefaultComponent;
  }

  loadComponent(fileModel: FileModel, component: any) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
    const componentRef = this._container.createComponent(componentFactory);
    (<MasonryTileComponentTwo>componentRef.instance).fileModel = fileModel;
  }

  route2FilePage() {
    // window.location.href = '/log-page/' + this.fileModel.id;
    // passing directory id as matrix parameter
    this.router.navigate(['/log-page/' + this.fileModel.id]);
  }
}