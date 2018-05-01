import {Component, Input, OnInit} from '@angular/core';
import {MarkdownService} from '../../../../../../../service/markdown/markdown.service';
import {FileModel} from '../../../../../../../service/core/file/model/file-model';

@Component({
  templateUrl: './masonry-tile-text-markdown-default.component.html',
  styleUrls: ['./masonry-tile-text-markdown-default.component.css']
})
export class MasonryTileTextMarkdownDefaultComponent implements OnInit {

  @Input() fileModel: FileModel;

  innerHTML: string;

  constructor(private markdownService: MarkdownService) {
  }

  ngOnInit() {
    this.innerHTML = this.markdownService.marked(this.fileModel.data.logDatas[0].data.text);
  }

}
