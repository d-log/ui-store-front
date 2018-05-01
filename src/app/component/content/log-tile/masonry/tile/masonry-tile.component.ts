import {Component, ComponentFactoryResolver, Input, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {MasonryTileImageDefaultComponent} from './type/image-default/masonry-tile-image-default.component';
import {MasonryTileTextPlainDefaultComponent} from './type/text-plain-default/masonry-tile-text-plain-default.component';
import {MasonryTileVideoYoutubeDefaultComponent} from './type/video-youtube-default/masonry-tile-video-youtube-default.component';
import {MasonryTileDefaultTileDefaultComponent} from './type/default-tile-default/masonry-tile-default-tile-default.component';
import {MasonryTileComponentTwo} from './type/masonry-tile-component-two';
import {MasonryTileTextQuoteDefaultComponent} from './type/text-quote-default/masonry-tile-text-quote-default.component';
import {MasonryTileTextMarkdownDefaultComponent} from './type/text-markdown-default/masonry-tile-text-markdown-default.component';
import {FileModel} from '../../../../../service/core/file/model/file-model';
import {LogData} from '../../../../../service/core/file/model/extra/data/logdata/log-data';

@Component({
  selector: 'app-masonry-tile',
  templateUrl: './masonry-tile.component.html',
  styleUrls: ['./masonry-tile.component.css']
})
export class MasonryTileComponent implements OnInit {
  @Input() fileModel: FileModel;
  @ViewChild('vc', {read: ViewContainerRef}) _container: ViewContainerRef;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
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

  loadLogPage() {
    window.location.href = '/log-page/' + this.fileModel.id;
  }
}
