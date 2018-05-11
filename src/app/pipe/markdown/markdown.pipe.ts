import {Pipe, PipeTransform} from '@angular/core';
import {MarkdownService} from '../../service/markdown/markdown.service';

@Pipe({
  name: 'markdown'
})
export class MarkdownPipe implements PipeTransform {

  constructor(private markdownService: MarkdownService) {
  }

  transform(markdown: string): string {
    return this.markdownService.marked(markdown);
  }
}
