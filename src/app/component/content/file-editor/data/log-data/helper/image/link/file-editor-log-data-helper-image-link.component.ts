import {AfterViewInit, Component, EventEmitter, Output, ViewChild} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {FileModel} from '../../../../../../../../service/core/file/model/file-model';
import {ImageModelService} from '../../../../../../../../service/core/file/type/image/image-model.service';

@Component({
  selector: 'app-file-create-log-data-helper-image-link',
  templateUrl: './file-editor-log-data-helper-image-link.component.html',
  styleUrls: ['./file-editor-log-data-helper-image-link.component.css']
})
export class FileEditorLogDataHelperImageLinkComponent implements AfterViewInit {
  @Output() receivedImageFileModel = new EventEmitter<FileModel>();
  @ViewChild('input') inputElement;
  link: string;

  constructor(private imageModelService: ImageModelService) {
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
    const observable: Observable<FileModel> | string = this.imageModelService.uploadByURL(this.link);
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
  }
}
