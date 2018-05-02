import {Component, Input, OnInit} from '@angular/core';
import {FileModel} from '../../../../../../../../service/core/file/model/file-model';

@Component({
  selector: 'app-masonry-tile-directory-default-tile-default',
  templateUrl: './masonry-tile-directory-default-tile-default.component.html',
  styleUrls: ['./masonry-tile-directory-default-tile-default.component.css']
})
export class MasonryTileDirectoryDefaultTileDefaultComponent implements OnInit {

  @Input() fileModel: FileModel;

  title: string;
  description: string;

  constructor() {
  }

  ngOnInit() {
    this.title = this.fileModel.metadata.name;
    this.description = this.fileModel.metadata.description;
  }

  test() {
    console.log('dvsfveveveb');
  }
}
