import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Metadata} from '../../../../service/core/file/model/extra/metadata';

@Component({
  selector: 'app-file-create-metadata',
  templateUrl: './file-create-metadata.component.html',
  styleUrls: ['./file-create-metadata.component.css']
})
export class FileCreateMetadataComponent implements OnInit {
  @Input() metadata: Metadata;
  @Output() updateFileModel = new EventEmitter<boolean>();

  constructor() {
    this.initialize();
  }

  ngOnInit() {
    this.initialize();
  }

  initialize() {
    if (!!this.metadata) {
      if (this.metadata.created === undefined) {
        this.metadata.created = +new Date();
      }
      if (this.metadata.displayCommentSection === undefined) {
        this.metadata.displayCommentSection = true;
      }
    }
  }

  onInputName(event: Event) {
    this.metadata.name = (<HTMLInputElement>event.srcElement).value;
    this.updateFileModel.emit(true);
  }

  onInputDescription(event: Event) {
    this.metadata.description = (<HTMLInputElement>event.srcElement).value;
    this.updateFileModel.emit(true);
  }

  onInputDisplayComments(event: Event) {
    this.metadata.displayCommentSection = (<HTMLInputElement>event.srcElement).checked;
    this.updateFileModel.emit(true);
  }
}