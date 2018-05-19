import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TagModelService} from '../../../../../service/core/file/type/tag/tag-model.service';
import {TagModel} from '../../../../../service/core/file/model/extra/data/tag/tag-model';

@Component({
  selector: 'app-tag-updator',
  templateUrl: './tag-updator.component.html',
  styleUrls: ['./tag-updator.component.css']
})
export class TagUpdatorComponent {
  @Input() tagModel: TagModel;
  @Output() close = new EventEmitter<boolean>();
  @Output() updatedTagFileModel = new EventEmitter<TagModel>();

  constructor(private tagModelService: TagModelService) {
  }

  onClose() {
    this.close.emit(true);
  }

  updateTagFileModel() {
    this.tagModelService.update(this.tagModel)
      .subscribe((model: TagModel) => {
        this.updatedTagFileModel.emit(model);
      });
  }
}
