import {Pipe, PipeTransform} from '@angular/core';

// https://daringfireball.net/projects/markdown/syntax
// requires in index.html <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
declare var marked: any;

@Pipe({
  name: 'markdown'
})
export class MarkdownPipe implements PipeTransform {

  transform(markdown: string): string {
    return marked(markdown);
  }
}
