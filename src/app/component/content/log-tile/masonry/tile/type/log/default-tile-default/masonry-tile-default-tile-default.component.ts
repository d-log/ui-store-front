import {Component, Input, OnInit} from '@angular/core';
import {FileModel} from '../../../../../../../../service/core/file/model/file-model';

@Component({
  selector: 'app-masonry-tile-default-tile-default',
  templateUrl: './masonry-tile-default-tile-default.component.html',
  styleUrls: ['./masonry-tile-default-tile-default.component.css']
})
export class MasonryTileDefaultTileDefaultComponent implements OnInit {

  @Input() fileModel: FileModel;

  name: string;
  description: string;

  ngOnInit() {
    this.name = this.fileModel.metadata.name;
    if (!this.name) {
      this.name = 'I DIDN\'T PUT A NAME ON THIS...';
    }
    this.description = this.fileModel.metadata.description;
    if (!this.description) {
      this.description = 'sadness :( there\'s no description';
    }
  }
}
