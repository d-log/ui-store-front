import {Injectable} from '@angular/core';
declare var marked: any;

@Injectable()
export class MarkdownService {

  /**
   * Turns markdown text into HTML and returns it
   * @param {string} markdownText
   * @returns {any}
   */
  marked(markdownText: string) {
    return marked(markdownText);
  }
}
