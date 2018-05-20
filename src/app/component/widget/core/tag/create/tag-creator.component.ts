import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TagModel} from '../../../../../service/core/model/data/tag/tag-model';
import {TagModelService} from '../../../../../service/core/endpoint/tag/tag-model.service';
import {Metadata} from '../../../../../service/core/model/data/metadata';

@Component({
  selector: 'app-tag-creator',
  templateUrl: './tag-creator.component.html',
  styleUrls: ['./tag-creator.component.css']
})
export class TagCreatorComponent implements OnInit {
  @Output() close = new EventEmitter<boolean>();
  @Output() createdTagFileModel = new EventEmitter<TagModel>();

  tagModel: TagModel;

  constructor(private tagModelService: TagModelService) {
  }

  ngOnInit() {
    if (this.tagModel === undefined) {
      this.tagModel = new TagModel();
    }
    if (this.tagModel.metadata === undefined) {
      this.tagModel.metadata = new Metadata();
    }
    if (this.tagModel.logIDs === undefined) {
      this.tagModel.logIDs = [];
    }
  }

  createTagFileModel() {
    this.tagModelService.create(this.tagModel)
      .subscribe((tagModel: TagModel) => {
        this.createdTagFileModel.emit(tagModel);
      });
  }

  onClose() {
    this.close.emit(true);
  }
}
