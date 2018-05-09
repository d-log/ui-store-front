import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TagModelService} from '../../../../../../service/core/file/type/tag/tag-model.service';
import {FileModel} from '../../../../../../service/core/file/model/file-model';
import {Pageable} from '../../../../../../service/core/model/request/pageable';
import {Sort} from '../../../../../../service/core/model/request/sort';
import {SortOrder} from '../../../../../../service/core/model/request/sort-order';

@Component({
  selector: 'app-file-create-organization-tag',
  templateUrl: './file-create-organization-tag.component.html',
  styleUrls: ['./file-create-organization-tag.component.css']
})
export class FileCreateOrganizationTagComponent implements OnInit {
  @Output() updateFileModel = new EventEmitter<boolean>();

  @Input() selectedTagFileModels: FileModel[];
  @Input() selectedTagFileModelIDs: string[];
  unSelectedTagFileModels: FileModel[];

  constructor(private tagModelService: TagModelService) {
    this.unSelectedTagFileModels = [];
    this.selectedTagFileModelIDs = [];
  }

  ngOnInit() {
    const pageable = new Pageable(0, 20);
    const sort = new Sort('metadata.name', SortOrder.asc);
    this.tagModelService.findAll(pageable, [sort]).subscribe((tagModels: FileModel[]) => {
      this.unSelectedTagFileModels = tagModels.filter((tagModel: FileModel) => !this.selectedTagFileModelIDs.includes(tagModel.id));
    });
  }

  unselectedTagClicked(index: number) {
    const tagModel = this.unSelectedTagFileModels[index];
    this.unSelectedTagFileModels.splice(index, 1);
    this.selectedTagFileModels.push(tagModel);
    this.selectedTagFileModels.sort(function (a: FileModel, b: FileModel) {
      return a.metadata.name.localeCompare(b.metadata.name);
    });
    this.selectedTagFileModelIDs = Array.from(this.selectedTagFileModels, fileModel => fileModel.id);
    this.updateFileModel.emit(true);
  }

  selectedTagClicked(index: number) {
    const tagModel = this.selectedTagFileModels[index];
    this.selectedTagFileModels.splice(index, 1);
    this.unSelectedTagFileModels.push(tagModel);
    this.unSelectedTagFileModels.sort(function (a: FileModel, b: FileModel) {
      return a.metadata.name.localeCompare(b.metadata.name);
    });
    this.selectedTagFileModelIDs = Array.from(this.selectedTagFileModels, fileModel => fileModel.id);
    this.updateFileModel.emit(true);
  }
}
