import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {GetterRequest} from '../../../../../../../../service/core/model/request/getter-request';
import {FileModelService} from '../../../../../../../../service/core/file/file-model.service';
import {LogData} from '../../../../../../../../service/core/file/model/extra/data/log/extra/log-data/log-data';
import {FileType} from '../../../../../../../../service/core/file/model/extra/file-type';
import {Pageable} from '../../../../../../../../service/core/model/request/pageable';
import {SortOrder} from '../../../../../../../../service/core/model/request/sort-order';
import {Sort} from '../../../../../../../../service/core/model/request/sort';
import {FileModel} from '../../../../../../../../service/core/file/model/file-model';
import {ImageInternalLogData} from '../../../../../../../../service/core/file/model/extra/data/log/extra/log-data/type/image-internal/image-internal-log-data';

@Component({
  selector: 'app-file-editor-log-data-helper-image-existing',
  templateUrl: './file-editor-log-data-helper-image-existing.component.html',
  styleUrls: ['./file-editor-log-data-helper-image-existing.component.css']
})
export class FileEditorLogDataHelperImageExistingComponent implements OnInit {
  @Output() doubleClickedImageLogData = new EventEmitter<LogData>();
  @ViewChild('bottom') bottom: any;

  selectedImageLogData: LogData;
  getterRequest: GetterRequest;
  selectableImageLogDatas: LogData[];
  moreFilesExist: boolean;

  constructor(private fileModelService: FileModelService) {
    this.selectableImageLogDatas = [];
    this.moreFilesExist = true;
    const getterRequest = new GetterRequest();
    getterRequest.fileTypes = [FileType.ImageFileData];
    getterRequest.pageable = new Pageable(-1, 20);
    getterRequest.sorts = [new Sort('metadata.created', SortOrder.desc)];
    this.getterRequest = getterRequest;
  }

  ngOnInit() {
    this.getImageModels();
  }

  getImageModels() {
    this.getterRequest.pageable.page++;
    this.fileModelService.theGetter(this.getterRequest).subscribe((fileModels: FileModel[]) => {
      if (fileModels.length === 0) {
        this.moreFilesExist = false;
      } else {
        const imageLogDatas: LogData[] = fileModels.map((fileModel: FileModel) => {
          const imageInternalLogData = new ImageInternalLogData();
          imageInternalLogData.imageID = fileModel.id;
          imageInternalLogData.imageFileData = fileModel.data;
          return new LogData('ImageInternalLogData', null, imageInternalLogData);
        });
        this.selectableImageLogDatas = this.selectableImageLogDatas.concat(imageLogDatas);
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
    const selectedImageLogData = this.selectableImageLogDatas[index];
    if (this.selectedImageLogData !== undefined && this.selectedImageLogData.data.imageID === selectedImageLogData.data.imageID) {
      this.doubleClickedImageLogData.emit(this.selectableImageLogDatas[index]);
    } else {
      this.selectedImageLogData = selectedImageLogData;
    }
  }
}
