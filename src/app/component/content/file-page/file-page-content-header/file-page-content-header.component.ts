import {Component, Input} from '@angular/core';
import {FileModel} from '../../../../service/core/file/model/file-model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-file-page-content-header',
  templateUrl: './file-page-content-header.component.html',
  styleUrls: ['./file-page-content-header.component.css']
})
export class FilePageContentHeaderComponent {

  @Input() set fileModel(fileModel: FileModel) {
    this.initialize(fileModel);
  }

  title: string;
  description: string;
  createdDateString: string;
  lastUpdatedDateString: string;
  logDirectoryFileModels: FileModel[];
  tagFileModels: FileModel[];

  constructor(private router: Router) {
  }

  initialize(fileModel: FileModel) {
    this.title = fileModel.metadata.name;
    this.description = fileModel.metadata.description;
    this.createdDateString = new Date(fileModel.metadata.created).toDateString();
    this.lastUpdatedDateString = new Date(fileModel.metadata.lastUpdated).toDateString();
    this.logDirectoryFileModels = fileModel.data.parentLogDirectoryFileDatas;
    this.tagFileModels = fileModel.data.tagFileDatas;
  }

  viewDirectoryInContent(logDirectoryFileID: string) {
    // passing directory id as matrix parameter
    this.router.navigate(['log-tile/archive', {'directory-id': logDirectoryFileID}]);
  }

  viewTagInContent(tagFileID: string) {
    // passing tag id as matrix parameter
    this.router.navigate(['log-tile/archive', {'tag-id': tagFileID}]);
  }

}
