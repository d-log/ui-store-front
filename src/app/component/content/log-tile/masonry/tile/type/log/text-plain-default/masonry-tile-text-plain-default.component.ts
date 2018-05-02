import {Component, Input, OnInit} from '@angular/core';
import {FileModel} from '../../../../../../../../service/core/file/model/file-model';

@Component({
  selector: 'app-masonry-tile-text-plain-default',
  templateUrl: './masonry-tile-text-plain-default.component.html',
  styleUrls: ['./masonry-tile-text-plain-default.component.css']
})
export class MasonryTileTextPlainDefaultComponent implements OnInit {

  @Input() fileModel: FileModel;

  text: string;

  constructor() {
  }

  ngOnInit() {
    const data = this.fileModel.data.logDatas[0].data;
    this.text = data.text;
  }

}
