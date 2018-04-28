import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DirectoryModel} from '../../../service/core/directory/model/directory-model';
import {DirectoryModelService} from '../../../service/core/directory/directory-model.service';
import {LogModelService} from '../../../service/core/log/log-model.service';
import {LogModel} from '../../../service/core/log/model/log-model';
import {GetterRequest} from '../../../service/core/log/getter-request';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navigation-side-left-directory',
  templateUrl: './side-navigation-directory-column.component.html',
  styleUrls: ['./side-navigation-directory-column.component.css']
})
export class SideNavigationDirectoryColumnComponent implements OnInit {

  @Input() level: number;
  @Input() directoryModel: DirectoryModel;
  @Output() childDirectorySelected = new EventEmitter<any>();
  childrenDirectoryModels: DirectoryModel[];
  logModels: LogModel[];
  isEmptyChildDirectoryModels: boolean;
  isEmptyLogModels: boolean;

  selectedDirectoryIndex: number;

  constructor(private router: Router,
              private directoryModelService: DirectoryModelService,
              private logModelService: LogModelService) {
    this.childrenDirectoryModels = [];
    this.selectedDirectoryIndex = -1;
    this.isEmptyChildDirectoryModels = false;
    this.isEmptyLogModels = false;
  }

  ngOnInit() {
    this.directoryModelService.findChildren(this.directoryModel.id).subscribe(directoryModels => {
      if (directoryModels.length === 0) {
        this.isEmptyChildDirectoryModels = true;
      } else {
        this.childrenDirectoryModels = directoryModels;
      }
    });

    const getterRequest = new GetterRequest();
    getterRequest.directoryID = this.directoryModel.id;
    this.logModelService.theGetter(getterRequest).subscribe(logModels => {
      if (logModels.length === 0) {
        this.isEmptyLogModels = true;
      } else {
        this.logModels = logModels;
      }
    });
  }

  selectChildDirectory(index: number) {
    this.childDirectorySelected.emit([this.level, this.childrenDirectoryModels[index]]);
    this.selectedDirectoryIndex = index;
  }

  selectLog(id: string) {
    this.router.navigate(['/log-page/' + id]);
  }
}
