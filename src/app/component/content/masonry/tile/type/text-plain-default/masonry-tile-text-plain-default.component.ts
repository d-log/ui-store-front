import {Component, Input, OnInit} from '@angular/core';
import {LogModel} from '../../../../../../service/log/model/log-model';

@Component({
  selector: 'app-masonry-tile-text-plain-default',
  templateUrl: './masonry-tile-text-plain-default.component.html',
  styleUrls: ['./masonry-tile-text-plain-default.component.css']
})
export class MasonryTileTextPlainDefaultComponent implements OnInit {

  @Input() logModel: LogModel;

  text: string;

  constructor() { }

  ngOnInit() {
    const data = this.logModel.logDatas[0].data;
    this.text = data.text;
  }

}
