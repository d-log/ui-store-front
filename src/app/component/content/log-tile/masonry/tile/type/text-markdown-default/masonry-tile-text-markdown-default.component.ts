import {Component, Input, OnInit} from '@angular/core';
import {LogModel} from '../../../../../../../service/core/log/model/log-model';
import {MarkdownService} from '../../../../../../../service/markdown/markdown.service';

@Component({
  templateUrl: './masonry-tile-text-markdown-default.component.html',
  styleUrls: ['./masonry-tile-text-markdown-default.component.css']
})
export class MasonryTileTextMarkdownDefaultComponent implements OnInit {

  @Input() logModel: LogModel;

  innerHTML: string;

  constructor(private markdownService: MarkdownService) {
  }

  ngOnInit() {
    this.innerHTML = this.markdownService.marked(this.logModel.logDatas[0].data.text);
  }

}
