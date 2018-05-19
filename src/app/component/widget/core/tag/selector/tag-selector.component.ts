import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TagModel} from '../../../../../service/core/file/model/extra/data/tag/tag-model';

@Component({
  selector: 'app-tag-selector',
  templateUrl: './tag-selector.component.html',
  styleUrls: ['./tag-selector.component.css']
})
export class TagSelectorComponent {
  @Input() hideTagModelIDs: string[];
  @Input() tagNameLikeString: string;
  @Output() selectTagFileModel = new EventEmitter<TagModel>();
  @Output() updateTagFileModel = new EventEmitter<TagModel>();
  @Output() close = new EventEmitter<boolean>();
  @Output() new = new EventEmitter<boolean>();

  onTagNameLikeStringChange(tagName: string) {
    this.tagNameLikeString = tagName;
  }

  onClose() {
    this.close.emit(true);
  }

  onNew() {
    this.new.emit(true);
  }

  onSelectTagModel(tagModel: TagModel) {
    this.selectTagFileModel.emit(tagModel);
  }

  onUpdateTagFileModel(tagModel: TagModel) {
    this.updateTagFileModel.emit(tagModel);
  }
}
