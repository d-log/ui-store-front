import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FileModel} from '../../../../service/core/file/model/file-model';

@Component({
  selector: 'app-tag-widget',
  templateUrl: './tag-widget.component.html',
  styleUrls: ['./tag-widget.component.css']
})
export class TagWidgetComponent implements OnInit {
  @Input() hideTagModelIDs: string[];
  @Input() tagNameLikeString: string;
  @Output() tagModelSelected = new EventEmitter<FileModel>();
  @Output() createdTagFileModel = new EventEmitter<FileModel>();
  @Output() close = new EventEmitter<boolean>();

  selectedTagModel: FileModel;

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

  onTagModelSelected(tagModel: FileModel) {
    this.selectedTagModel = tagModel;
    this.tagModelSelected.emit(this.selectedTagModel);
  }

  onCreatedTagFileModel(tagFileModel: FileModel) {
    this.createdTagFileModel.emit(tagFileModel);
    this.displayType = 'select';
  }
}
