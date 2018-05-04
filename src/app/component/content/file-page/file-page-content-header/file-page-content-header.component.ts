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

  views: number;
  name: string;
  description: string;
  createdDateString: string;
  lastUpdatedDateString: string;
  logDirectoryFileModels: FileModel[];
  tagFileModels: FileModel[];

  showUpdated: boolean;

  constructor(private router: Router) {
  }

  initialize(fileModel: FileModel) {
    if (!!fileModel) {
      this.views = 13;
      this.name = fileModel.metadata.name;
      this.description = fileModel.metadata.description;
      this.createdDateString = new Date(fileModel.metadata.created).toDateString();
      this.logDirectoryFileModels = fileModel.data.parentLogDirectoryFileDatas;
      this.tagFileModels = fileModel.data.tagFileDatas;

      if (!!fileModel.metadata.lastUpdated && (fileModel.metadata.created !== fileModel.metadata.lastUpdated)) {
        this.lastUpdatedDateString = new Date(fileModel.metadata.lastUpdated).toDateString();
        this.showUpdated = true;
      } else {
        this.showUpdated = false;
      }
    }
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
