import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FileModel} from '../../../../../service/core/file/model/file-model';
import {TagModelService} from '../../../../../service/core/file/type/tag/tag-model.service';
import {TagFileData} from '../../../../../service/core/file/model/extra/data/tag/tag-file-data';
import {Metadata} from '../../../../../service/core/file/model/extra/metadata';

@Component({
  selector: 'app-tag-creator',
  templateUrl: './tag-creator.component.html',
  styleUrls: ['./tag-creator.component.css']
})
export class TagCreatorComponent implements OnInit {
  @Output() close = new EventEmitter<boolean>();
  @Output() createdTagFileModel = new EventEmitter<FileModel>();

  tagFileModel: FileModel;

  constructor(private tagModelService: TagModelService) {
  }

  ngOnInit() {
    if (this.tagFileModel === undefined) {
      this.tagFileModel = new FileModel();
    }
    if (this.tagFileModel.metadata === undefined) {
      this.tagFileModel.metadata = new Metadata();
    }
    if (this.tagFileModel.data === undefined) {
      this.tagFileModel.data = new TagFileData();
    }
    if (this.tagFileModel.data.logFileIDs === undefined) {
      this.tagFileModel.data.logFileIDs = [];
    }
    if (this.tagFileModel.data.logDirectoryIDs === undefined) {
      this.tagFileModel.data.logDirectoryIDs = [];
    }
  }

  createTagFileModel() {
    this.tagModelService.create(this.tagFileModel)
      .subscribe((createdModel: FileModel) => {
        this.createdTagFileModel.emit(createdModel);
      });
  }

  onClose() {
    this.close.emit(true);
  }
}
