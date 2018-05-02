import {Component, Input, OnInit} from '@angular/core';
import {FileModel} from '../../../../../../../service/core/file/model/file-model';

@Component({
  templateUrl: './masonry-tile-default.component.html',
  styleUrls: ['./masonry-tile-default.component.css']
})
export class MasonryTileDefaultComponent implements OnInit {

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
