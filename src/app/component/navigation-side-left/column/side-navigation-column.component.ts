import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {GetterRequest} from '../../../service/core/file/getter-request';
import {FileModel} from '../../../service/core/file/model/file-model';
import {FileModelService} from '../../../service/core/file/file-model.service';
import {FileType} from '../../../service/core/file/model/extra/file-type';
import {Sort} from '../../../service/core/model/sort';
import {SortOrder} from '../../../service/core/model/sort-order';
import {Pageable} from '../../../service/core/model/pageable';

@Component({
  selector: 'app-navigation-side-left-column',
  templateUrl: './side-navigation-column.component.html',
  styleUrls: ['./side-navigation-column.component.css']
})
export class SideNavigationColumnComponent implements OnInit {

  @Input() level: number;
  @Input() logDirectoryFileModel: FileModel;
  @Output() childDirectorySelected = new EventEmitter<any>();
  fileModels: FileModel[];
  isEmpty: boolean;

  selectedDirectoryIndex: number;
  getterRequest: GetterRequest;

  constructor(private router: Router,
              private fileModelService: FileModelService) {
    this.fileModels = [];
    this.isEmpty = false;
    this.selectedDirectoryIndex = -1;
  }

  ngOnInit() {
    const getterRequest = new GetterRequest();
    getterRequest.fileTypes = [FileType.LogFileData, FileType.LogDirectoryFileData];
    getterRequest.directoryID = this.logDirectoryFileModel.id;
    getterRequest.pageable = new Pageable(0, 20);
    getterRequest.sorts = [
      new Sort('metadata.type', SortOrder.asc),
      new Sort('metadata.created', SortOrder.desc),
    ];
    this.getterRequest = getterRequest;

    this.fileModelService.theGetter(getterRequest).subscribe(fileModels => {
      if (fileModels.length === 0) {
        this.isEmpty = true;
      } else {
        this.fileModels = fileModels;
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
}
