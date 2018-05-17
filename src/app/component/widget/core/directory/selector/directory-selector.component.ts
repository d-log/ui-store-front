import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FileModel} from '../../../../../service/core/file/model/file-model';
import {DirectoryModelService} from '../../../../../service/core/file/type/directory/directory-model.service';
import {FileType} from '../../../../../service/core/file/model/extra/file-type';

@Component({
  selector: 'app-directory-selector-column-container',
  templateUrl: './directory-selector.component.html',
  styleUrls: ['./directory-selector.component.css']
})
export class DirectorySelectorComponent implements OnInit {
  @Input() showColumnToolbar: boolean;
  @Input() fileTypes: FileType[];
  pathLogDirectoryFileModels: FileModel[];
  selectedFileModel: FileModel;
  selectedFileModelID: string;

  @Output() directoryFileModelSelectedMoreThanOnce = new EventEmitter<FileModel>();
  @Output() directoryFileModelSelected = new EventEmitter<FileModel>();
  @Output() logFileModelSelected = new EventEmitter<FileModel>();
  @Output() tagFileModelSelected = new EventEmitter<FileModel>();

  constructor(private directoryModelService: DirectoryModelService) {
    this.showColumnToolbar = false;
    this.pathLogDirectoryFileModels = [];
  }

  ngOnInit() {
    this.directoryModelService.getRoot().subscribe(directoryModel => {
      this.pathLogDirectoryFileModels = [directoryModel];
    });
  }

  onSelectedFileModel(event: EventEmitter<any>) {
    const oldSelectedFileModel = this.selectedFileModel;
    this.setSelectedFileModel(event[1]);
    if (this.selectedFileModel.metadata.type === 'LogDirectoryFileData') {
      if (oldSelectedFileModel !== undefined && this.selectedFileModel.id === oldSelectedFileModel.id) {
        this.directoryFileModelSelectedMoreThanOnce.emit(this.selectedFileModel);
      } else {
        this.pathLogDirectoryFileModels = this.pathLogDirectoryFileModels.slice(0, event[0] + 1);
        this.pathLogDirectoryFileModels.push(event[1]);
      }
      this.directoryFileModelSelected.emit(this.selectedFileModel);
    } else if (this.selectedFileModel.metadata.type === 'LogFileData') {
      this.logFileModelSelected.emit(this.selectedFileModel);
    }
  }

  setSelectedFileModel(selectedModel: FileModel) {
    this.selectedFileModel = selectedModel;
    this.selectedFileModelID = selectedModel.id;
  }
}
