import {Component, ComponentFactoryResolver, Input, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {FileModel} from '../../../../../../../service/core/file/model/file-model';
import {MasonryTileDirectoryDefaultTileDefaultComponent} from './default-tile-default/masonry-tile-directory-default-tile-default.component';
import {MasonryTileComponentTwo} from '../masonry-tile-component-two';
import {FileType} from '../../../../../../../service/core/file/model/extra/file-type';
import {Router} from '@angular/router';

@Component({
  templateUrl: './masonry-tile-directory.component.html',
  styleUrls: ['./masonry-tile-directory.component.css']
})
export class MasonryTileDirectoryComponent implements OnInit {
  @Input() fileModel: FileModel;
  @ViewChild('vc', {read: ViewContainerRef}) _container: ViewContainerRef;

  constructor(private router: Router,
              private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngOnInit() {
    const component = MasonryTileDirectoryDefaultTileDefaultComponent;
    this.loadComponent(this.fileModel, component);
  }

  loadComponent(fileModel: FileModel, component: any) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
    const componentRef = this._container.createComponent(componentFactory);
    (<MasonryTileComponentTwo>componentRef.instance).fileModel = fileModel;
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
