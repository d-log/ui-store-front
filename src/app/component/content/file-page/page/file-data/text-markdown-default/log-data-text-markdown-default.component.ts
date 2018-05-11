import {Component, Input, OnInit} from '@angular/core';
import {MarkdownService} from '../../../../../../service/markdown/markdown.service';
import {LogData} from '../../../../../../service/core/file/model/extra/data/log/extra/log-data/log-data';

@Component({
  selector: 'app-log-data-text-markdown-default',
  templateUrl: './log-data-text-markdown-default.component.html',
  styleUrls: ['./log-data-text-markdown-default.component.css']
})
export class LogDataTextMarkdownDefaultComponent implements OnInit {

  @Input() logData: LogData;

  innerHTML: string;

  constructor(private markdownService: MarkdownService) {
  }

  ngOnInit() {
    this.innerHTML = this.markdownService.marked(this.logData.data.text);
  }

}
