import {AfterViewInit, Component, EventEmitter, Output, ViewChild} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ImageUploadService} from '../../../../../../../../service/core/file/type/image/image-upload.service';
import {ImageModel} from '../../../../../../../../service/core/file/model/extra/data/image/image-model';

@Component({
  selector: 'app-log-editor-content-helper-image-link',
  templateUrl: './log-editor-content-helper-image-link.component.html',
  styleUrls: ['./log-editor-content-helper-image-link.component.css']
})
export class LogEditorContentHelperImageLinkComponent implements AfterViewInit {
  @Output() receivedImageModel = new EventEmitter<ImageModel>();
  @ViewChild('input') inputElement;
  link: string;

  constructor(private imageUploadService: ImageUploadService) {
  }

  ngAfterViewInit() {
    this.inputElement.nativeElement.focus();
  }

  onKeyPress(event: any) {
    if (event.keyCode === 13) {
      this.submitLink();
    }
  }

  submitLink() {
    const observable: Observable<ImageModel> | string = this.imageUploadService.uploadByURL(this.link);
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
  }
}
