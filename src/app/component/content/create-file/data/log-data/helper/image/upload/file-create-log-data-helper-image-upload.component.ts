import {AfterViewInit, Component, EventEmitter, Output} from '@angular/core';
import {FileModel} from '../../../../../../../../service/core/file/model/file-model';
import {ImageModelService} from '../../../../../../../../service/core/file/type/image/image-model.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-file-create-log-data-helper-image-upload',
  templateUrl: './file-create-log-data-helper-image-upload.component.html',
  styleUrls: ['./file-create-log-data-helper-image-upload.component.css']
})
export class FileCreateLogDataHelperImageUploadComponent implements AfterViewInit {
  @Output() receivedImageFileModel = new EventEmitter<FileModel>();

  constructor(private imageModelService: ImageModelService) {
  }

  ngAfterViewInit() {
    const form = document.getElementById('file-form');
    const fileSelect: HTMLInputElement = <HTMLInputElement>document.getElementById('file-select');

    form.onsubmit = () => {
      event.preventDefault();

      const observable: Observable<FileModel> | string = this.imageModelService.uploadByFile(fileSelect.files);
      if (observable instanceof Observable) {
        observable.subscribe((imageFileModel: FileModel) => {
          if (imageFileModel !== undefined && imageFileModel.id !== undefined) {
            this.receivedImageFileModel.emit(imageFileModel);
          } else {
            alert(imageFileModel);
          }
        });
      } else {
        alert(observable);
      }
    };
  }
}
