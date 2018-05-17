import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {FileModel} from '../../../../../../service/core/file/model/file-model';
import {FileModelService} from '../../../../../../service/core/file/file-model.service';
import {GetterRequest} from '../../../../../../service/core/model/request/getter-request';
import {FileType} from '../../../../../../service/core/file/model/extra/file-type';
import {Pageable} from '../../../../../../service/core/model/request/pageable';
import {Sort} from '../../../../../../service/core/model/request/sort';
import {SortOrder} from '../../../../../../service/core/model/request/sort-order';

@Component({
  selector: 'app-tag-selector-content',
  templateUrl: './tag-selector-content.component.html',
  styleUrls: ['./tag-selector-content.component.css']
})
export class TagSelectorContentComponent {
  @Output() selectTagFileModel = new EventEmitter<FileModel>();
  @Output() updateTagFileModel = new EventEmitter<FileModel>();
  @Input() hideTagModelIDs: string[];

  @Input() set tagNameLikeString(tagNameLikeString: string) {
    this._tagNameLikeString = tagNameLikeString;
    this.initialize();
  }

  _tagNameLikeString: string;

  tagFileModels: FileModel[];

  @ViewChild('bottom') bottom: any;
  moreFilesExist: boolean;
  getterRequest: GetterRequest;

  constructor(private fileModelService: FileModelService) {
  }

  initialize() {
    const getterRequest = new GetterRequest();
    getterRequest.fileTypes = [FileType.TagFileData];
    getterRequest.metadataNameRegex = this._tagNameLikeString;
    getterRequest.pageable = new Pageable(-1, 20);
    getterRequest.sorts = [new Sort('metadata.name', SortOrder.asc)];

    if (this.hideTagModelIDs == null) {
      this.hideTagModelIDs = [];
    }

    this.getterRequest = getterRequest;
    this.tagFileModels = [];
    this.moreFilesExist = true;

    this.getTagModels();
  }

  onSelectTagModel(index: number) {
    this.selectTagFileModel.emit(this.tagFileModels[index]);
    this.loadModelsIfEmptySpace();
  }

  onUpdateTagFileModel(index: number) {
    this.updateTagFileModel.emit(this.tagFileModels[index]);
  }

  getTagModels() {
    this.getterRequest.pageable.page++;
    this.fileModelService.theGetter(this.getterRequest).subscribe((tagModels: FileModel[]) => {
      if (tagModels.length === 0) {
        this.moreFilesExist = false;
      } else {
        this.tagFileModels = this.tagFileModels.concat(tagModels);
        this.loadModelsIfEmptySpace();
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
