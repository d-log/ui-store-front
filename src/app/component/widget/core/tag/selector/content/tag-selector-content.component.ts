import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {TagModel} from '../../../../../../service/core/file/model/extra/data/tag/tag-model';
import {Pageable} from '../../../../../../service/core/model/request/pageable';
import {Sort} from '../../../../../../service/core/model/request/sort';
import {TagModelService} from '../../../../../../service/core/file/type/tag/tag-model.service';
import {SortOrder} from '../../../../../../service/core/model/request/sort-order';

@Component({
  selector: 'app-tag-selector-content',
  templateUrl: './tag-selector-content.component.html',
  styleUrls: ['./tag-selector-content.component.css']
})
export class TagSelectorContentComponent {
  @Output() selectTagFileModel = new EventEmitter<TagModel>();
  @Output() updateTagFileModel = new EventEmitter<TagModel>();
  @Input() hideTagModelIDs: string[];

  @Input() set tagNameLikeString(tagNameLikeString: string) {
    this._tagNameLikeString = tagNameLikeString;
    this.initialize();
  }

  _tagNameLikeString: string;

  tagModels: TagModel[];

  @ViewChild('bottom') bottom: any;
  moreFilesExist: boolean;

  pageable: Pageable;
  sorts: Sort[];

  constructor(private tagModelService: TagModelService) {
  }

  initialize() {
    this.pageable = new Pageable(-1, 20);
    this.sorts = [new Sort('metadata.name', SortOrder.asc)];

    if (this.hideTagModelIDs == null) {
      this.hideTagModelIDs = [];
    }

    this.tagModels = [];
    this.moreFilesExist = true;

    this.getTagModels();
  }

  onSelectTagModel(index: number) {
    this.selectTagFileModel.emit(this.tagModels[index]);
    this.loadModelsIfEmptySpace();
  }

  onUpdateTagFileModel(index: number) {
    this.updateTagFileModel.emit(this.tagModels[index]);
  }

  getTagModels() {
    this.pageable.page++;
    this.tagModelService.findAll().subscribe((tagModels: TagModel[]) => {
      if (tagModels.length === 0) {
        this.moreFilesExist = false;
      } else {
        this.tagModels = this.tagModels.concat(tagModels);
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
