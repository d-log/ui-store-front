import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {FileModel} from '../../../../../../../../service/core/file/model/file-model';

@Component({
  selector: 'app-tile-log-extra',
  templateUrl: './tile-log-extra.component.html',
  styleUrls: ['./tile-log-extra.component.css']
})
export class TileLogExtraComponent implements OnInit {

  @Input() fileModel: FileModel;
  @ViewChild('container') containerElement: any;

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
