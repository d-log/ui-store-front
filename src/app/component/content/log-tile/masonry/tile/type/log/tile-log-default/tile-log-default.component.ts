import {Component, Input, OnInit} from '@angular/core';
import {LogModel} from '../../../../../../../../service/core/model/data/log/log-model';

@Component({
  selector: 'app-tile-log-default',
  templateUrl: './tile-log-default.component.html',
  styleUrls: ['./tile-log-default.component.css']
})
export class TileLogDefaultComponent implements OnInit {

  @Input() logModel: LogModel;

  name: string;
  description: string;

  ngOnInit() {
    this.name = this.logModel.metadata.name;
    if (!this.name) {
      this.name = 'I DIDN\'T PUT A NAME ON THIS...';
    }
    this.description = this.logModel.metadata.description;
    if (!this.description) {
      this.description = 'sadness :( there\'s no description';
    }
  }
}
