import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {FileModel} from '../../../../../../service/core/file/model/file-model';
import {Pageable} from '../../../../../../service/core/model/request/pageable';
import {Sort} from '../../../../../../service/core/model/request/sort';
import {SortOrder} from '../../../../../../service/core/model/request/sort-order';
import {FileModelService} from '../../../../../../service/core/file/file-model.service';
import {GetterRequest} from '../../../../../../service/core/model/request/getter-request';
import {FileType} from '../../../../../../service/core/file/model/extra/file-type';
import {LogFileData} from '../../../../../../service/core/file/model/extra/data/log/log-file-data';

@Component({
  selector: 'app-file-editor-organization-tag',
  templateUrl: './file-editor-organization-tag.component.html',
  styleUrls: ['./file-editor-organization-tag.component.css']
})
export class FileEditorOrganizationTagComponent implements OnInit {
  @Input() data: LogFileData;

  unSelectedTagFileModels: FileModel[];

  @ViewChild('bottom') bottom: any;

  moreFilesExist: boolean;
  getterRequest: GetterRequest;

  constructor(private fileModelService: FileModelService) {
    this.unSelectedTagFileModels = [];
  }

  ngOnInit() {
    if (this.data.organization.tagFileIDs === undefined) {
      this.data.organization.tagFileIDs = [];
    }
    if (this.data.tagFileDatas === undefined) {
      this.data.tagFileDatas = [];
    }

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
    this.data.tagFileDatas.push(tagModel);
    this.data.tagFileDatas.sort(function (a: FileModel, b: FileModel) {
      return a.metadata.name.localeCompare(b.metadata.name);
    });
    this.data.organization.tagFileIDs = Array.from(this.data.tagFileDatas, fileModel => fileModel.id);
  }

  selectedTagClicked(index: number) {
    const tagModel = this.data.tagFileDatas[index];
    this.data.tagFileDatas.splice(index, 1);
    this.unSelectedTagFileModels.push(tagModel);
    this.unSelectedTagFileModels.sort(function (a: FileModel, b: FileModel) {
      return a.metadata.name.localeCompare(b.metadata.name);
    });
    this.data.organization.tagFileIDs = Array.from(this.data.tagFileDatas, fileModel => fileModel.id);
  }

  getTagModels() {
    this.getterRequest.pageable.page++;
    this.fileModelService.theGetter(this.getterRequest).subscribe((tagModels: FileModel[]) => {
      if (tagModels.length === 0) {
        this.moreFilesExist = false;
      } else {
        tagModels = tagModels.filter((tagModel: FileModel) => !this.data.organization.tagFileIDs.includes(tagModel.id));
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
