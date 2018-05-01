import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DirectoryModelService} from '../../../service/core/directory/directory-model.service';
import {Router} from '@angular/router';
import {GetterRequest} from '../../../service/core/file/getter-request';
import {FileModel} from '../../../service/core/file/model/file-model';
import {FileModelService} from '../../../service/core/file/file-model.service';

@Component({
  selector: 'app-navigation-side-left-directory',
  templateUrl: './side-navigation-directory-column.component.html',
  styleUrls: ['./side-navigation-directory-column.component.css']
})
export class SideNavigationDirectoryColumnComponent implements OnInit {

  @Input() level: number;
  @Input() logDirectoryFileModel: FileModel;
  @Output() childDirectorySelected = new EventEmitter<any>();
  childrenLogDirectoryFileModels: FileModel[];
  logFileModels: FileModel[];
  isEmptyChildLogDirectoryFileModels: boolean;
  isEmptyLogFileModels: boolean;

  selectedDirectoryIndex: number;

  constructor(private router: Router,
              private directoryModelService: DirectoryModelService,
              private fileModelService: FileModelService) {
    this.childrenLogDirectoryFileModels = [];
    this.selectedDirectoryIndex = -1;
    this.isEmptyChildLogDirectoryFileModels = false;
    this.isEmptyLogFileModels = false;
  }

  ngOnInit() {
    this.directoryModelService.findChildren(this.logDirectoryFileModel.id).subscribe(logDirectoryFileModels => {
      if (logDirectoryFileModels.length === 0) {
        this.isEmptyChildLogDirectoryFileModels = true;
      } else {
        this.childrenLogDirectoryFileModels = logDirectoryFileModels;
      }
    });

    const getterRequest = new GetterRequest();
    getterRequest.directoryID = this.logDirectoryFileModel.id;
    this.fileModelService.theGetter(getterRequest).subscribe(logFileModels => {
      if (logFileModels.length === 0) {
        this.isEmptyLogFileModels = true;
      } else {
        this.logFileModels = logFileModels;
      }
    });
  }

  selectChildDirectory(index: number) {
    this.childDirectorySelected.emit([this.level, this.childrenLogDirectoryFileModels[index]]);
    this.selectedDirectoryIndex = index;
  }

  selectLog(id: string) {
    this.router.navigate(['/log-page/' + id]);
  }
}
