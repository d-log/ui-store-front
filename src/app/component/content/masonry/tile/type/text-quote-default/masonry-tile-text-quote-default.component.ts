import {Component, Input, OnInit} from '@angular/core';
import {LogModel} from '../../../../../../service/log/model/log-model';

@Component({
  selector: 'app-masonry-tile-text-quote-default',
  templateUrl: './masonry-tile-text-quote-default.component.html',
  styleUrls: ['./masonry-tile-text-quote-default.component.css']
})
export class MasonryTileTextQuoteDefaultComponent implements OnInit {

  @Input() logModel: LogModel;

  quote: string;
  formOfCommunication: string;
  sourceType: string;
  sourceName: string;

  constructor() {
  }

  ngOnInit() {
    const data = this.logModel.logDatas[0].data;
    this.quote = data.quote;
    this.formOfCommunication = data.formOfCommunication;
    this.sourceType = data.sourceType;
    this.sourceName = data.sourceName;
  }

}
