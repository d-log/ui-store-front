import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FileModel} from '../../../../service/core/file/model/file-model';

@Component({
  selector: 'app-tag-creator-and-selector',
  templateUrl: './tag-creator-and-selector.component.html',
  styleUrls: ['./tag-creator-and-selector.component.css']
})
export class TagCreatorAndSelectorComponent {
  @Input() hideTagModelIDs: string[];
  @Input() tagNameLikeString: string;
  @Output() tagModelSelected = new EventEmitter<FileModel>();
  @Output() closeComponent = new EventEmitter<boolean>();
  selectedTagModel: FileModel;

  searchWithNewString(string: string) {
    this.tagNameLikeString = string;
  }

  onCloseComponent() {
    this.closeComponent.emit(true);
  }

  onTagModelSelected(tagModel: FileModel) {
    this.selectedTagModel = tagModel;
    this.tagModelSelected.emit(this.selectedTagModel);
  }
}
