import {Pipe, PipeTransform} from '@angular/core';
import {TextCodeLogData} from '../../service/core/file/model/extra/data/log/extra/log-data/type/text-code/text-code-log-data';

declare var PR: any;

@Pipe({
  name: 'code'
})
export class CodePipe implements PipeTransform {

  transform(dataString: string): string {
    const data: TextCodeLogData = JSON.parse(dataString);
    return PR.prettyPrintOne(data.code, data.language, data.showLineNumber);
  }
}
