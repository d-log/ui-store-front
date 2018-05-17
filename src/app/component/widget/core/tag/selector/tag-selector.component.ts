import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FileModel} from '../../../../../service/core/file/model/file-model';

@Component({
  selector: 'app-tag-selector',
  templateUrl: './tag-selector.component.html',
  styleUrls: ['./tag-selector.component.css']
})
export class TagSelectorComponent {
  @Input() hideTagModelIDs: string[];
  @Input() tagNameLikeString: string;
  @Output() selectTagFileModel = new EventEmitter<FileModel>();
  @Output() updateTagFileModel = new EventEmitter<FileModel>();
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

  onSelectTagModel(tagModel: FileModel) {
    this.selectTagFileModel.emit(tagModel);
  }

  onUpdateTagFileModel(tagModel: FileModel) {
    this.updateTagFileModel.emit(tagModel);
  }
}
