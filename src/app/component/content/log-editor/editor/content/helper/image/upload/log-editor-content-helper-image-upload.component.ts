import {AfterViewInit, Component, EventEmitter, Output} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ImageUploadService} from '../../../../../../../../service/core/file/type/image/image-upload.service';
import {ImageModel} from '../../../../../../../../service/core/file/model/extra/data/image/image-model';

@Component({
  selector: 'app-file-editor-log-data-helper-image-upload',
  templateUrl: './log-editor-content-helper-image-upload.component.html',
  styleUrls: ['./log-editor-content-helper-image-upload.component.css']
})
export class LogEditorContentHelperImageUploadComponent implements AfterViewInit {
  @Output() receivedImageModel = new EventEmitter<ImageModel>();

  constructor(private imageUploadService: ImageUploadService) {
  }

  ngAfterViewInit() {
    const form = document.getElementById('file-form');
    const fileSelect: HTMLInputElement = <HTMLInputElement>document.getElementById('file-select');

    form.onsubmit = () => {
      event.preventDefault();

      const observable: Observable<ImageModel> | string = this.imageUploadService.uploadByFile(fileSelect.files);
      if (observable instanceof Observable) {
        observable.subscribe((imageModel: ImageModel) => {
          if (imageModel !== undefined && imageModel.id !== undefined) {
            this.receivedImageModel.emit(imageModel);
          } else {
            alert(imageModel);
          }
        });
      } else {
        alert(observable);
      }
    };
  }
}
