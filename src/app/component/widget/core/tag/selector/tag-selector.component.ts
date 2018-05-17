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
  @Output() tagModelSelected = new EventEmitter<FileModel>();
  @Output() close = new EventEmitter<boolean>();
  @Output() new = new EventEmitter<boolean>();

  selectedTagModel: FileModel;

  searchWithNewString(string: string) {
    this.tagNameLikeString = string;
  }

  onClose() {
    this.close.emit(true);
  }

  onNew() {
    this.new.emit(true);
  }

  onTagModelSelected(tagModel: FileModel) {
    this.selectedTagModel = tagModel;
    this.tagModelSelected.emit(this.selectedTagModel);
  }
}
