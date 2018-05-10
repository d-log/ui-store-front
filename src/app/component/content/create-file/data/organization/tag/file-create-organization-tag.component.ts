import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {FileModel} from '../../../../../../service/core/file/model/file-model';
import {Pageable} from '../../../../../../service/core/model/request/pageable';
import {Sort} from '../../../../../../service/core/model/request/sort';
import {SortOrder} from '../../../../../../service/core/model/request/sort-order';
import {FileModelService} from '../../../../../../service/core/file/file-model.service';
import {GetterRequest} from '../../../../../../service/core/model/request/getter-request';
import {FileType} from '../../../../../../service/core/file/model/extra/file-type';

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

  @ViewChild('bottom') bottom: any;

  moreFilesExist: boolean;
  getterRequest: GetterRequest;

  constructor(private fileModelService: FileModelService) {
    this.unSelectedTagFileModels = [];
    this.selectedTagFileModelIDs = [];
  }

  ngOnInit() {
    this.moreFilesExist = true;

    const getterRequest = new GetterRequest();
    getterRequest.fileTypes = [FileType.TagFileData];
    getterRequest.pageable = new Pageable(-1, 20);
    getterRequest.sorts = [new Sort('metadata.name', SortOrder.asc)];
    this.getterRequest = getterRequest;

    this.getTagModels();
  }

  unselectedTagClicked(index: number) {
    this.loadModelsIfEmptySpace();
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

  getTagModels() {
    this.getterRequest.pageable.page++;
    this.fileModelService.theGetter(this.getterRequest).subscribe((tagModels: FileModel[]) => {
      if (tagModels.length === 0) {
        this.moreFilesExist = false;
      } else {
        tagModels = tagModels.filter((tagModel: FileModel) => !this.selectedTagFileModelIDs.includes(tagModel.id));
        this.unSelectedTagFileModels = this.unSelectedTagFileModels.concat(tagModels);
      }
    });
  }

  onScroll() {
    this.loadModelsIfEmptySpace();
  }

  loadModelsIfEmptySpace() {
    if (this.moreFilesExist) {
      if (this.isElementInViewport(this.bottom.nativeElement)) {
        this.getTagModels();
      }
    }
  }

  isElementInViewport(el) {
    const viewportOffset = el.getBoundingClientRect();
    const top = viewportOffset.top;
    return top <= window.innerHeight;
  }
}
