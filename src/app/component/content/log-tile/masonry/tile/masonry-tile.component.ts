import {Component, ComponentFactoryResolver, Input, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {MasonryTileComponentTwo} from './type/masonry-tile-component-two';
import {FileModel} from '../../../../../service/core/file/model/file-model';
import {FileType} from '../../../../../service/core/file/model/extra/file-type';
import {MasonryTileDirectoryComponent} from './type/directory/masonry-tile-directory.component';
import {MasonryTileDefaultComponent} from './type/default/masonry-tile-default.component';
import {MasonryTileLogComponent} from './type/log/masonry-tile-log.component';

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
    const component = this.getComponentFromData(this.fileModel);
    this.loadComponent(this.fileModel, component);
  }

  // TODO turn into service to map logData types to Masonry Tile Components
  public getComponentFromData(fileModel: FileModel) {
    const fileType: string = fileModel.metadata.type;

    if (fileType === FileType[FileType.LogFileData]) {
      return MasonryTileLogComponent;
    } else if (fileType === FileType[FileType.LogDirectoryFileData]) {
      return MasonryTileDirectoryComponent;
    } else {
      return MasonryTileDefaultComponent;
    }
  }

  loadComponent(fileModel: FileModel, component: any) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
    const componentRef = this._container.createComponent(componentFactory);
    (<MasonryTileComponentTwo>componentRef.instance).fileModel = fileModel;
  }
}
