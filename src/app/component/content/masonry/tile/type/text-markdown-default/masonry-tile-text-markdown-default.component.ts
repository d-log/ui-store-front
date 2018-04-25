import {Component, Input, OnInit} from '@angular/core';
import {LogModel} from '../../../../../../service/log/model/log-model';

@Component({
  templateUrl: './masonry-tile-text-markdown-default.component.html',
  styleUrls: ['./masonry-tile-text-markdown-default.component.css']
})
export class MasonryTileTextMarkdownDefaultComponent implements OnInit {

  @Input() logModel: LogModel;

  text: string;

  constructor() {
  }

  ngOnInit() {
    this.text = this.logModel.logDatas[0].data.text;
  }

}
