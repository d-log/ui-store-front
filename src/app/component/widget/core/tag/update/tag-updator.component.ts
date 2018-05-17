import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FileModel} from '../../../../../service/core/file/model/file-model';
import {TagModelService} from '../../../../../service/core/file/type/tag/tag-model.service';

@Component({
  selector: 'app-tag-updator',
  templateUrl: './tag-updator.component.html',
  styleUrls: ['./tag-updator.component.css']
})
export class TagUpdatorComponent {
  @Input() fileModel: FileModel;
  @Output() close = new EventEmitter<boolean>();
  @Output() updatedTagFileModel = new EventEmitter<FileModel>();

  constructor(private tagModelService: TagModelService) {
  }

  onClose() {
    this.close.emit(true);
  }

  updateTagFileModel() {
    this.tagModelService.update(this.fileModel)
      .subscribe((model: FileModel) => {
        this.updatedTagFileModel.emit(model);
      });
  }
}
