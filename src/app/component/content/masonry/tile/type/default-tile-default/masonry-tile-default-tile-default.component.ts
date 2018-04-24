import {Component, Input, OnInit} from '@angular/core';
import {LogModel} from '../../../../../../service/log/model/log-model';

@Component({
  selector: 'app-masonry-tile-default-tile-default',
  templateUrl: './masonry-tile-default-tile-default.component.html',
  styleUrls: ['./masonry-tile-default-tile-default.component.css']
})
export class MasonryTileDefaultTileDefaultComponent implements OnInit {

  @Input() logModel: LogModel;

  title: string;
  description: string;

  constructor() {
  }

  ngOnInit() {
    this.title = this.logModel.title;
    this.description = this.logModel.description;
  }

}
