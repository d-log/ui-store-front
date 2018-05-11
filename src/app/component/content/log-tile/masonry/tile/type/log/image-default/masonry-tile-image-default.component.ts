import {Component, Input, OnInit} from '@angular/core';
import {FileModel} from '../../../../../../../../service/core/file/model/file-model';
import {ImageInternalLogData} from '../../../../../../../../service/core/file/model/extra/data/log/extra/log-data/type/image-internal/image-internal-log-data';

@Component({
  selector: 'app-masonry-tile-image-default',
  templateUrl: './masonry-tile-image-default.component.html',
  styleUrls: ['./masonry-tile-image-default.component.css']
})
export class MasonryTileImageDefaultComponent implements OnInit {

  @Input() fileModel: FileModel;

  img_src: string;
  padding_bottom_percentage: number;

  constructor() {
  }

  ngOnInit() {
    const data: ImageInternalLogData = this.fileModel.data.logDatas[0].data;
    if (!!data && !!data.imageFileData) {
      this.img_src = data.imageFileData.imageURL;
      this.padding_bottom_percentage = data.imageFileData.heightDividedByWidth * 100;
    }
  }

}
