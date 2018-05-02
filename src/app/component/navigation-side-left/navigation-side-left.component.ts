import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DirectoryModelService} from '../../service/core/file/type/directory/directory-model.service';
import {FileModel} from '../../service/core/file/model/file-model';

@Component({
  selector: 'app-navigation-side-left',
  templateUrl: './navigation-side-left.component.html',
  styleUrls: ['./navigation-side-left.component.css']
})
export class NavigationSideLeftComponent implements OnInit {

  @Output() onCloseNavigationSideLeft = new EventEmitter<boolean>();
  pathLogDirectoryFileModels: FileModel[];

  constructor(private directoryModelService: DirectoryModelService) {
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

  closeNavigationSideLeft() {
    this.onCloseNavigationSideLeft.emit();
  }

  target() {
    alert('coming soon');
  }
}
