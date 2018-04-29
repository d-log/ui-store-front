import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DirectoryModel} from '../../service/core/directory/model/directory-model';
import {DirectoryModelService} from '../../service/core/directory/directory-model.service';

@Component({
  selector: 'app-navigation-side-left',
  templateUrl: './navigation-side-left.component.html',
  styleUrls: ['./navigation-side-left.component.css']
})
export class NavigationSideLeftComponent implements OnInit {

  @Output() onCloseNavigationSideLeft = new EventEmitter<boolean>();
  pathDirectoryModels: DirectoryModel[];

  constructor(private directoryModelService: DirectoryModelService) {
    this.pathDirectoryModels = [];
  }

  ngOnInit() {
    this.directoryModelService.getRoot().subscribe(directoryModel => {
      this.pathDirectoryModels = [directoryModel];
    });
  }

  directorySelected(event: EventEmitter<any>) {
    this.pathDirectoryModels = this.pathDirectoryModels.slice(0, event[0] + 1);
    this.pathDirectoryModels.push(event[1]);
  }

  closeNavigationSideLeft() {
    this.onCloseNavigationSideLeft.emit();
  }
}
