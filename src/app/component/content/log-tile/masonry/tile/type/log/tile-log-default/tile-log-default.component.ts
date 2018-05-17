import {Component, Input, OnInit} from '@angular/core';
import {FileModel} from '../../../../../../../../service/core/file/model/file-model';

@Component({
  selector: 'app-tile-log-default',
  templateUrl: './tile-log-default.component.html',
  styleUrls: ['./tile-log-default.component.css']
})
export class TileLogDefaultComponent implements OnInit {

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
