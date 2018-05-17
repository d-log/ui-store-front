import {Component, EventEmitter, Output} from '@angular/core';
import {FileModel} from '../../../../../service/core/file/model/file-model';

@Component({
  selector: 'app-tag-updator',
  templateUrl: './tag-updator.component.html',
  styleUrls: ['./tag-updator.component.css']
})
export class TagUpdatorComponent {
  @Output() close = new EventEmitter<boolean>();
  @Output() updatedTagFileModel = new EventEmitter<FileModel>();

  onClose() {
    this.close.emit(true);
  }
}
