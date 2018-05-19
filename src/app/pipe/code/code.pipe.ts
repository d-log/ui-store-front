import {Pipe, PipeTransform} from '@angular/core';
import {TextCodeLogContent} from '../../service/core/file/model/extra/data/log/extra/log-data/type/text-code/text-code-log-content';

declare var PR: any;

@Pipe({
  name: 'code'
})
export class CodePipe implements PipeTransform {

  transform(dataString: string): string {
    const data: TextCodeLogContent = JSON.parse(dataString);
    return PR.prettyPrintOne(data.text, data.language, data.showLineNumber);
  }
}
