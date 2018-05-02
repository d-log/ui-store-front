import {Component, Input, OnInit} from '@angular/core';
import {FileModel} from '../../../../../../../../service/core/file/model/file-model';

@Component({
  selector: 'app-masonry-tile-default-tile-default',
  templateUrl: './masonry-tile-default-tile-default.component.html',
  styleUrls: ['./masonry-tile-default-tile-default.component.css']
})
export class MasonryTileDefaultTileDefaultComponent implements OnInit {

  @Input() fileModel: FileModel;

  title: string;
  description: string;

  constructor() {
  }

  ngOnInit() {
    this.title = this.fileModel.metadata.name;
    this.description = this.fileModel.metadata.description;
  }

}
