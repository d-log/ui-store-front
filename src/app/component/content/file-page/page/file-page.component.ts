import {Component, HostListener, Input} from '@angular/core';
import 'rxjs/add/operator/switchMap';
import {FileModel} from '../../../../service/core/file/model/file-model';
import {LogData} from '../../../../service/core/file/model/extra/data/log/extra/log-data/log-data';
import {Router} from '@angular/router';

@Component({
  selector: 'app-file-page',
  templateUrl: './file-page.component.html',
  styleUrls: ['./file-page.component.css']
})
export class FilePageComponent {
  @Input() set fileModel(fileModel: FileModel) {
    this.initialize(fileModel);
  }

  _fileModel: FileModel;
  logDatas: LogData[];

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
    console.log(event.keyCode);
    this.keyCodes.push();
    if (event.keyCode === this.secretKeyCode[this.keyCodes.length]) {
      this.keyCodes.push(event.keyCode);
      if (this.keyCodes.length === this.secretKeyCode.length) {
        this.router.navigate(['/file/update/' + this._fileModel.id]);
      }
    }

    setTimeout(() => {
      this.keyCodes = [];
    }, 1000);
  }

  initialize(fileModel: FileModel) {
    this._fileModel = fileModel;
    this.logDatas = [];

    if (!!fileModel) {
      if (!!fileModel.data.logDatas) {
        this.logDatas = fileModel.data.logDatas;
      }
    }
  }
}
