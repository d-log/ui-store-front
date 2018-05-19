import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TagModel} from '../../../../service/core/file/model/extra/data/tag/tag-model';

@Component({
  selector: 'app-tag-widget',
  templateUrl: './tag-widget.component.html',
  styleUrls: ['./tag-widget.component.css']
})
export class TagWidgetComponent implements OnInit {
  @Input() hideTagModelIDs: string[];
  @Input() tagNameLikeString: string;
  @Output() tagModelSelected = new EventEmitter<TagModel>();
  @Output() createdTagFileModel = new EventEmitter<TagModel>();
  @Output() close = new EventEmitter<boolean>();

  selectedTagModel: TagModel;

  displayType: string; // select | create | update

  ngOnInit() {
    if (this.hideTagModelIDs === undefined) {
      this.hideTagModelIDs = [];
    }
    this.displayType = 'select';
  }

  onNew() {
    this.displayType = 'create';
  }

  onClose() {
    if (this.displayType === 'select') {
      this.close.emit(true);
    } else {
      this.displayType = 'select';
    }
  }

  onUpdateTagFileModel(tagModel: TagModel) {
    this.selectedTagModel = tagModel;
    this.displayType = 'update';
  }

  onTagModelSelected(tagModel: TagModel) {
    this.selectedTagModel = tagModel;
    this.tagModelSelected.emit(this.selectedTagModel);
  }

  onCreatedTagFileModel(tagModel: TagModel) {
    this.tagNameLikeString = tagModel.metadata.name;
    this.createdTagFileModel.emit(tagModel);
    this.displayType = 'select';
  }

  onUpdatedTagFileModel(tagModel: TagModel) {
    this.tagNameLikeString = tagModel.metadata.name;
    this.displayType = 'select';
  }
}
