import {Component, ComponentFactoryResolver, Input, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {ITileComponent} from './type/i-tile-component';
import {FileModel} from '../../../../../service/core/file/model/file-model';
import {FileType} from '../../../../../service/core/file/model/extra/file-type';
import {TileDirectoryComponent} from './type/directory/tile-directory.component';
import {TileDefaultComponent} from './type/default/tile-default.component';
import {TileLogComponent} from './type/log/tile-log.component';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})
export class TileComponent implements OnInit {
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
      return TileLogComponent;
    } else if (fileType === FileType[FileType.LogDirectoryFileData]) {
      return TileDirectoryComponent;
    } else {
      return TileDefaultComponent;
    }
  }

  loadComponent(fileModel: FileModel, component: any) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
    const componentRef = this._container.createComponent(componentFactory);
    (<ITileComponent>componentRef.instance).fileModel = fileModel;
  }
}
