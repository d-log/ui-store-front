import {Component, Input, OnInit} from '@angular/core';
import {LogModel} from '../../../../../../service/log/model/log-model';

@Component({
  selector: 'app-masonry-tile-image-default',
  templateUrl: './masonry-tile-image-default.component.html',
  styleUrls: ['./masonry-tile-image-default.component.css']
})
export class MasonryTileImageDefaultComponent implements OnInit {

  @Input() logModel: LogModel;

  img_src: string;
  padding_bottom_percentage: number;

  constructor() {
  }

  ngOnInit() {
    const data = this.logModel.logDatas[0].data;
    this.img_src = data.imageURL;
    this.padding_bottom_percentage = data.imageMetaData.heightDivideWidth * 100;
  }

}
