import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ImageInternalLogData} from '../../../../../../../../service/core/file/model/extra/data/log/extra/log-data/type/image-internal/image-internal-log-data';
import {FileModelService} from '../../../../../../../../service/core/file/file-model.service';
import {FileModel} from '../../../../../../../../service/core/file/model/file-model';
import {GetterRequest} from '../../../../../../../../service/core/model/request/getter-request';
import {FileType} from '../../../../../../../../service/core/file/model/extra/file-type';
import {Pageable} from '../../../../../../../../service/core/model/request/pageable';
import {Sort} from '../../../../../../../../service/core/model/request/sort';
import {SortOrder} from '../../../../../../../../service/core/model/request/sort-order';
import {LogData} from '../../../../../../../../service/core/file/model/extra/data/log/extra/log-data/log-data';

@Component({
  selector: 'app-file-create-log-data-image-internal',
  templateUrl: './file-create-log-data-image-internal.component.html',
  styleUrls: ['./file-create-log-data-image-internal.component.css']
})
export class FileCreateLogDataImageInternalComponent implements OnInit {
  @Input() imageInternalLogData: ImageInternalLogData;
  @ViewChild('bottom') bottom: any;

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
        // tagModels = fileModels.filter((fileModel: FileModel) => !this.selectedFileModel.includes(fileModel.id));
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

  onSelectImage(index: number) {
    this.imageInternalLogData.imageID = this.selectableImageLogDatas[index].data.imageID;
    this.imageInternalLogData.imageFileData = this.selectableImageLogDatas[index].data.imageFileData;
  }

  isElementInViewport(el) {
    const viewportOffset = el.getBoundingClientRect();
    const top = viewportOffset.top;
    return top <= window.innerHeight;
  }
}
