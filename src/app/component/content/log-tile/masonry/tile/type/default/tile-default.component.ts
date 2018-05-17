import {Component, Input, OnInit} from '@angular/core';
import {FileModel} from '../../../../../../../service/core/file/model/file-model';

@Component({
  templateUrl: './tile-default.component.html',
  styleUrls: ['./tile-default.component.css']
})
export class TileDefaultComponent implements OnInit {

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
