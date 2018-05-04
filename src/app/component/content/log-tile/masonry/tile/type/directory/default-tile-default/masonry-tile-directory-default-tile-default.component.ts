import {AfterViewChecked, AfterViewInit, Component, HostListener, Input, OnInit, ViewChild} from '@angular/core';
import {FileModel} from '../../../../../../../../service/core/file/model/file-model';
import {BrokerEvent} from '../../../../../../../../service/event-broker-shared-service/broker-event';
import {EventBrokerService} from '../../../../../../../../service/event-broker-shared-service/event-broker-service';

@Component({
  selector: 'app-masonry-tile-directory-default-tile-default',
  templateUrl: './masonry-tile-directory-default-tile-default.component.html',
  styleUrls: ['./masonry-tile-directory-default-tile-default.component.css']
})
export class MasonryTileDirectoryDefaultTileDefaultComponent implements OnInit, AfterViewChecked {

  @Input() fileModel: FileModel;
  @ViewChild('element') element: any;

  name: string;
  description: string;
  numChildDirectories: string;
  numChildLogs: string;
  directoryEmpty: boolean;

  nameFontSize: number;
  descriptionFontSize: number;
  emptyFontSize: number;
  iconFontSize: number;
  countFontSize: number;

  constructor() {
    this.directoryEmpty = false;
  }

  ngOnInit() {
    this.name = this.fileModel.metadata.name;
    if (!this.name) {
      this.name = 'NO NAME';
    }

    this.description = this.fileModel.metadata.description;
    if (!this.description) {
      this.description = 'No Description';
    }

    this.numChildDirectories = this.fileModel.data.childLogDirectoryFileIDs.length;
    if (+this.numChildDirectories > 99) {
      this.numChildDirectories = '99+';
    }

    this.numChildLogs = this.fileModel.data.logFileIDs.length;
    if (+this.numChildLogs > 99) {
      this.numChildLogs = '99+';
    }

    if (+this.numChildDirectories === 0 && +this.numChildLogs === 0) {
      this.directoryEmpty = true;
    }

    this.adjustFontSize();
  }

  /**
   * ngAfterViewChecked() will be called every time change detection runs
   * https://angular.io/guide/lifecycle-hooks
   */
  ngAfterViewChecked() {
    this.adjustFontSize();
  }

  adjustFontSize() {
    const width = this.element.nativeElement.offsetWidth;
    this.emptyFontSize = width / 6;
    this.iconFontSize = width / 2;
    this.countFontSize = width / 4;
    this.nameFontSize = width / 20;
    this.descriptionFontSize = width / 27;
  }
}
