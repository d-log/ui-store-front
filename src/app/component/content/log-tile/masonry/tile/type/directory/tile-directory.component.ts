import {Component, ComponentFactoryResolver, Input, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {FileModel} from '../../../../../../../service/core/file/model/file-model';
import {TileDirectoryDefaultComponent} from './tile-directory-default/tile-directory-default.component';
import {ITileComponent} from '../i-tile-component';
import {FileType} from '../../../../../../../service/core/file/model/extra/file-type';
import {Router} from '@angular/router';

@Component({
  templateUrl: './tile-directory.component.html',
  styleUrls: ['./tile-directory.component.css']
})
export class TileDirectoryComponent implements OnInit {
  @Input() fileModel: FileModel;
  @ViewChild('vc', {read: ViewContainerRef}) _container: ViewContainerRef;

  constructor(private router: Router,
              private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngOnInit() {
    const component = TileDirectoryDefaultComponent;
    this.loadComponent(this.fileModel, component);
  }

  loadComponent(fileModel: FileModel, component: any) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
    const componentRef = this._container.createComponent(componentFactory);
    (<ITileComponent>componentRef.instance).fileModel = fileModel;
  }

  route2Archive() {
    // passing directory id as matrix parameter
    this.router.navigate(['log-tile/archive',
      {
        'directory-id': this.fileModel.id,
        'file-types': FileType[FileType.LogDirectoryFileData] + ':' + FileType[FileType.LogFileData],
      }]);
  }
}
