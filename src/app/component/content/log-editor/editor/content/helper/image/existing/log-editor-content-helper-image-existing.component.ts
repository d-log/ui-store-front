import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Pageable} from '../../../../../../../../service/core/model/request/pageable';
import {LogContent} from '../../../../../../../../service/core/file/model/extra/data/log/extra/log-content/log-content';
import {Sort} from '../../../../../../../../service/core/model/request/sort';
import {ImageModelService} from '../../../../../../../../service/core/file/type/image/image-model.service';
import {SortOrder} from '../../../../../../../../service/core/model/request/sort-order';
import {ImageModel} from '../../../../../../../../service/core/file/model/extra/data/image/image-model';
import {ImageInternalLogContent} from '../../../../../../../../service/core/file/model/extra/data/log/extra/log-content/type/image-internal/image-internal-log-content';

@Component({
  selector: 'app-log-editor-content-helper-image-existing',
  templateUrl: './log-editor-content-helper-image-existing.component.html',
  styleUrls: ['./log-editor-content-helper-image-existing.component.css']
})
export class LogEditorContentHelperImageExistingComponent implements OnInit {
  @Output() doubleClickedImageLogContent = new EventEmitter<LogContent>();
  @ViewChild('bottom') bottom: any;

  pageable: Pageable;
  sorts: Sort[];
  moreFilesExist: boolean;

  selectableImageLogContents: LogContent[];
  selectedImageLogContent: LogContent;

  constructor(private imageModelService: ImageModelService) {
    this.selectableImageLogContents = [];
    this.moreFilesExist = true;
    this.pageable = new Pageable(-1, 20);
    this.sorts = [new Sort('metadata.created', SortOrder.desc)];
  }

  ngOnInit() {
    this.getImageModels();
  }

  getImageModels() {
    this.pageable.page++;
    this.imageModelService.findAll(this.pageable).subscribe((imageModels: ImageModel[]) => {
      if (imageModels.length === 0) {
        this.moreFilesExist = false;
      } else {
        const imageInternalLogContents: LogContent[] = imageModels.map((imageModel: ImageModel) => {
          const imageInternalLogContent = new ImageInternalLogContent();
          imageInternalLogContent.imageModelID = imageModel.id;
          imageInternalLogContent.imageModel = imageModel;
          return new LogContent('ImageInternalLogContent', null, imageInternalLogContent);
        });
        this.selectableImageLogContents = this.selectableImageLogContents.concat(imageInternalLogContents);
      }
    });
  }

  onScroll() {
    this.loadModelsIfEmptySpace();
  }

  loadModelsIfEmptySpace() {
    if (this.moreFilesExist) {
      if (this.isElementInViewport(this.bottom.nativeElement)) {
        this.getImageModels();
      }
    }
  }

  isElementInViewport(el) {
    const viewportOffset = el.getBoundingClientRect();
    const top = viewportOffset.top;
    return top <= window.innerHeight;
  }

  onSelectImage(index: number) {
    const selectedImageLogContent = this.selectableImageLogContents[index];
    if (this.selectedImageLogContent !== undefined && this.selectedImageLogContent.data.imageModel.id === selectedImageLogContent.data.imageModel.id) {
      this.doubleClickedImageLogContent.emit(this.selectableImageLogContents[index]);
    } else {
      this.selectedImageLogContent = selectedImageLogContent;
    }
  }
}
