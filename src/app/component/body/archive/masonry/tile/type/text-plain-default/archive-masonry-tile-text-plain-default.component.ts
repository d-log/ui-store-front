import {Component, Input, OnInit} from '@angular/core';
import {LogModel} from '../../../../../../../service/log/model/log-model';

@Component({
  selector: 'app-archive-masonry-item-text-default',
  templateUrl: './archive-masonry-tile-text-plain-default.component.html',
  styleUrls: ['./archive-masonry-tile-text-plain-default.component.css']
})
export class ArchiveMasonryTileTextPlainDefaultComponent implements OnInit {

  @Input() logModel: LogModel;

  text: string;

  constructor() { }

  ngOnInit() {
    const data = this.logModel.logDatas[0].data;
    this.text = data.text;
  }

}
