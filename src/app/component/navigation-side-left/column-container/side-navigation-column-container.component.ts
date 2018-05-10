import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {FileModel} from '../../../service/core/file/model/file-model';
import {DirectoryModelService} from '../../../service/core/file/type/directory/directory-model.service';
import {FileType} from '../../../service/core/file/model/extra/file-type';

@Component({
  selector: 'app-navigation-side-left-column-container',
  templateUrl: './side-navigation-column-container.component.html',
  styleUrls: ['./side-navigation-column-container.component.css']
})
export class SideNavigationColumnContainerComponent implements OnInit {
  @Input() showColumnToolbar: boolean;
  @Input() fileTypes: FileType[];
  pathLogDirectoryFileModels: FileModel[];

  constructor(private directoryModelService: DirectoryModelService) {
    this.showColumnToolbar = false;
    this.pathLogDirectoryFileModels = [];
  }

  ngOnInit() {
    this.directoryModelService.getRoot().subscribe(directoryModel => {
      this.pathLogDirectoryFileModels = [directoryModel];
    });
  }

  directorySelected(event: EventEmitter<any>) {
    this.pathLogDirectoryFileModels = this.pathLogDirectoryFileModels.slice(0, event[0] + 1);
    this.pathLogDirectoryFileModels.push(event[1]);
  }
}
