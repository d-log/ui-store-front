import {Component, HostListener, Input} from '@angular/core';
import 'rxjs/add/operator/switchMap';
import {Router} from '@angular/router';
import {LogContent} from '../../../../service/core/model/data/log/extra/log-content/log-content';
import {LogModel} from '../../../../service/core/model/data/log/log-model';

@Component({
  selector: 'app-log-page',
  templateUrl: './log-page.component.html',
  styleUrls: ['./log-page.component.css']
})
export class LogPageComponent {
  @Input() set logModel(logModel: LogModel) {
    this.initialize(logModel);
  }

  _logModel: LogModel;
  logContents: LogContent[];

  constructor(private router: Router) {
  }

  /**
   * when secretKeyCode is pressed within a second redirect to hidden /file/update
   * @type {number[]}
   */
  secretKeyCode = [70, 70];
  keyCodes = [];

  @HostListener('window:keyup', ['$event'])
  keyup(event: any) {
    this.keyCodes.push();
    if (event.keyCode === this.secretKeyCode[this.keyCodes.length]) {
      this.keyCodes.push(event.keyCode);
      if (this.keyCodes.length === this.secretKeyCode.length) {
        this.router.navigate(['/file/update/' + this._logModel.id]);
      }
    }

    setTimeout(() => {
      this.keyCodes = [];
    }, 1000);
  }

  initialize(logModel: LogModel) {
    this._logModel = logModel;
    this.logContents = [];

    if (!!logModel) {
      if (!!logModel.logContents) {
        this.logContents = logModel.logContents;
      }
    }
  }
}
