import {Component, EventEmitter, HostListener, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {GetterRequest} from '../../../service/core/model/request/getter-request';
import {FileModel} from '../../../service/core/file/model/file-model';
import {FileModelService} from '../../../service/core/file/file-model.service';
import {FileType} from '../../../service/core/file/model/extra/file-type';
import {Sort} from '../../../service/core/model/request/sort';
import {SortOrder} from '../../../service/core/model/request/sort-order';
import {Pageable} from '../../../service/core/model/request/pageable';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-navigation-side-left-column',
  templateUrl: './side-navigation-column.component.html',
  styleUrls: ['./side-navigation-column.component.css']
})
export class SideNavigationColumnComponent implements OnInit {

  @Input() level: number;
  @Input() logDirectoryFileModel: FileModel;
  @Output() childDirectorySelected = new EventEmitter<any>();
  @ViewChild('bottom') bottom: any;
  fileModels: FileModel[];
  fileModelsObservable: Observable<FileModel[]>;
  isEmpty: boolean;
  moreFilesExist: boolean;

  selectedDirectoryIndex: number;
  getterRequest: GetterRequest;

  constructor(private router: Router,
              private fileModelService: FileModelService) {
    this.fileModelsObservable = null;
    this.fileModels = [];
    this.isEmpty = false;
    this.selectedDirectoryIndex = -1;
    this.moreFilesExist = true;
  }

  ngOnInit() {
    const getterRequest = new GetterRequest();
    getterRequest.fileTypes = [FileType.LogFileData, FileType.LogDirectoryFileData];
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

  selectChildDirectory(index: number) {
    this.childDirectorySelected.emit([this.level, this.fileModels[index]]);
    this.selectedDirectoryIndex = index;
  }

  selectLog(id: string) {
    this.router.navigate(['/log-page/' + id]);
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
