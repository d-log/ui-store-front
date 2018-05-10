import {Component, EventEmitter, HostListener, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {FileType} from '../../../../service/core/file/model/extra/file-type';
import {FileModel} from '../../../../service/core/file/model/file-model';
import {GetterRequest} from '../../../../service/core/model/request/getter-request';
import {FileModelService} from '../../../../service/core/file/file-model.service';
import {Pageable} from '../../../../service/core/model/request/pageable';
import {SortOrder} from '../../../../service/core/model/request/sort-order';
import {Sort} from '../../../../service/core/model/request/sort';

@Component({
  selector: 'app-navigation-side-left-column',
  templateUrl: './side-navigation-column.component.html',
  styleUrls: ['./side-navigation-column.component.css']
})
export class SideNavigationColumnComponent implements OnInit {

  @Input() showColumnToolbar: boolean;
  @Input() fileTypes: FileType[];
  @Input() directoryLevel: number;
  @Input() logDirectoryFileModel: FileModel;
  @Output() fileModelSelected = new EventEmitter<any>();
  @ViewChild('bottom') bottom: any;
  fileModels: FileModel[];
  fileModelsObservable: Observable<FileModel[]>;
  isEmpty: boolean;
  moreFilesExist: boolean;

  @Input() selectedFileModelID: string;

  @Input() set pathLogDirectoryFileModels(pathLogDirectoryFileModels: FileModel[]) {
    if (pathLogDirectoryFileModels.length > (this.directoryLevel + 1)) {
      this.directoryPathID = pathLogDirectoryFileModels[this.directoryLevel + 1].id;
    } else {
      this.directoryPathID = undefined;
    }
  }

  directoryPathID: string;

  getterRequest: GetterRequest;

  constructor(private fileModelService: FileModelService) {
    this.showColumnToolbar = false;
    this.fileTypes = [];
    this.fileModelsObservable = null;
    this.fileModels = [];
    this.isEmpty = false;
    this.moreFilesExist = true;
  }

  ngOnInit() {
    const getterRequest = new GetterRequest();
    getterRequest.fileTypes = this.fileTypes;
    getterRequest.directoryID = this.logDirectoryFileModel.id;
    getterRequest.pageable = new Pageable(-1, 20);
    getterRequest.sorts = [
      new Sort('metadata.type', SortOrder.asc),
      new Sort('metadata.created', SortOrder.desc),
    ];
    this.getterRequest = getterRequest;

    this.getFileModels();
    this.fileModelsObservable.subscribe(fileModels => {
      if (fileModels.length === 0) {
        this.isEmpty = true;
      } else {
        this.loadModelsIfEmptySpace();
      }
    });
  }

  selectFileModel(index: number) {
    this.fileModelSelected.emit([this.directoryLevel, this.fileModels[index]]);
  }

  onScroll() {
    this.loadModelsIfEmptySpace();
  }

  /**
   * checks if more logs exist if so check if there is space in viewport
   */
  loadModelsIfEmptySpace() {
    if (this.moreFilesExist) {
      if (this.isElementInViewport(this.bottom.nativeElement)) {
        this.getFileModels();
      }
    }
  }

  isElementInViewport(el) {
    const viewportOffset = el.getBoundingClientRect();
    const top = viewportOffset.top;
    return top <= window.innerHeight;
  }

  getFileModels() {
    this.getterRequest.pageable.page++;
    this.fileModelsObservable = this.fileModelService.theGetter(this.getterRequest);
    this.fileModelsObservable.subscribe(fileModels => {
      if (fileModels.length === 0) {
        this.moreFilesExist = false;
      } else {
        this.fileModels = this.fileModels.concat(fileModels);
      }
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    // // masonry auto call layout, so no need to call viewportResize
    setTimeout(() => {
      this.loadModelsIfEmptySpace();
    }, 500); // wait for masonry layoutComplete
  }
}
