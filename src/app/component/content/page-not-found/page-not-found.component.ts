import {AfterViewChecked, Component, ViewChild} from '@angular/core';

@Component({
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements AfterViewChecked {

  @ViewChild('container') containerElement: any;
  fontSize: number;

  /**
   * ngAfterViewChecked() will be called every time change detection runs
   * https://angular.io/guide/lifecycle-hooks
   */
  ngAfterViewChecked() {
    this.adjustFontSize();
  }

  adjustFontSize() {
    const width = this.containerElement.nativeElement.offsetWidth;
    this.fontSize = width / 6;
  }
}
