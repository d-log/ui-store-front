import {Component, Input, OnInit} from '@angular/core';
import {LogData} from '../../../../../service/log/model/extra/logdata/log-data';
import {MarkdownService} from '../../../../../service/markdown/markdown.service';

@Component({
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
