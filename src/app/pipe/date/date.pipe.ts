import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'date'
})
export class DatePipe implements PipeTransform {

  transform(unixTime: number): string {
    return new Date(unixTime).toDateString();
  }
}
