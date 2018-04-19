import {Component, ComponentFactoryResolver, Input, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {ArchiveMasonryTileImageDefaultComponent} from './type/image-default/archive-masonry-tile-image-default.component';
import {ArchiveMasonryTileVideoYoutubeDefaultComponent} from './type/video-youtube-default/archive-masonry-tile-video-youtube-default.component';
import {ArchiveMasonryTileTextPlainDefaultComponent} from './type/text-plain-default/archive-masonry-tile-text-plain-default.component';
import {ArchiveMasonryTileComponentTwo} from './type/archive-masonry-tile-component-two';
import {ImageInternalLogData} from '../../../../../service/log/model/extra/logdata/impl/image-internal-log-data';
import {VideoYouTubeLogData} from '../../../../../service/log/model/extra/logdata/impl/video-youtube-log-data';
import {TextPlainLogData} from '../../../../../service/log/model/extra/logdata/impl/text-plain-log-data';
import {LogModel} from '../../../../../service/log/model/log-model';
import {LogData} from '../../../../../service/log/model/extra/logdata/log-data';
import {ArchiveMasonryTileDefaultTileDefaultComponent} from './type/default-tile-default/archive-masonry-tile-default-tile-default.component';

@Component({
  selector: 'app-archive-masonry-tile',
  templateUrl: './archive-masonry-tile.component.html',
  styleUrls: ['./archive-masonry-tile.component.css']
})
export class ArchiveMasonryTileComponent implements OnInit {
  @Input() logModel: LogModel;
  @ViewChild('vc', {read: ViewContainerRef}) _container: ViewContainerRef;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngOnInit() {
    const component = this.getComponentFromData(this.logModel.logDatas[0]);
    if (component) {
      this.loadComponent(this.logModel, component);
    } else {
      console.log('component is null');
    }
  }

  // TODO turn into service to map logData types to Masonry Tile Components
  public getComponentFromData(logData: LogData) {
    switch (logData.logDataType) {
      case 'ImageInternalLogData': {
        return ArchiveMasonryTileImageDefaultComponent;
      }
      case 'TextPlainLogData': {
        return ArchiveMasonryTileTextPlainDefaultComponent;
      }
      case 'VideoYouTubeLogData': {
        return ArchiveMasonryTileVideoYoutubeDefaultComponent;
      }
    }
    return ArchiveMasonryTileDefaultTileDefaultComponent;
  }

  loadComponent(logModel: LogModel, component: any) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
    const componentRef = this._container.createComponent(componentFactory);
    (<ArchiveMasonryTileComponentTwo>componentRef.instance).logModel = logModel;
  }
}
