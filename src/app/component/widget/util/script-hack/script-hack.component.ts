import {AfterViewInit, Component, ElementRef, Input, ViewChild} from '@angular/core';

/**
 * Angular strips out <script> tags
 * Here's a hack to add them back
 * https://stackoverflow.com/questions/42458346/need-to-insert-script-tag-in-angular-2/44904601#44904601
 */
@Component({
  selector: 'app-script-hack',
  templateUrl: './script-hack.component.html'
})
export class ScriptHackComponent implements AfterViewInit {

  @Input()
  src: string;

  @Input()
  type: string;

  @ViewChild('script') script: ElementRef;

  convertToScript() {
    const element = this.script.nativeElement;
    const script = document.createElement('script');
    script.type = this.type ? this.type : 'text/javascript';
    if (this.src) {
      script.src = this.src;
    }
    if (element.innerHTML) {
      script.innerHTML = element.innerHTML;
    }
    const parent = element.parentElement;
    parent.parentElement.replaceChild(script, parent);
  }

  ngAfterViewInit() {
    this.convertToScript();
  }
}
