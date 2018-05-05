import {AfterViewChecked, Component, Input, OnInit, ViewChild} from '@angular/core';
import {FileModel} from '../../../../../../../service/core/file/model/file-model';

@Component({
  selector: 'app-masonry-tile-log-bottom',
  templateUrl: './masonry-tile-log-bottom.component.html',
  styleUrls: ['./masonry-tile-log-bottom.component.css']
})
export class MasonryTileLogBottomComponent implements OnInit, AfterViewChecked {

  @Input() fileModel: FileModel;
  @ViewChild('container') containerElement: any;

  name: string;
  description: string;
  nameFontSize: number;
  descriptionFontSize: number;

  ngOnInit() {
    this.nameFontSize = 20;
    this.descriptionFontSize = 15;
    this.name = this.fileModel.metadata.name;
    if (!this.name) {
      this.name = 'I DIDN\'T PUT A NAME ON THIS...';
    }
    this.description = this.fileModel.metadata.description;
    if (!this.description) {
      this.description = 'sadness :( there\'s no description';
    }
  }

  ngAfterViewChecked() {
    this.updateFontSize();
  }

  updateFontSize() {
    const width = this.containerElement.nativeElement.offsetWidth;
    this.nameFontSize = width / 25;
    this.descriptionFontSize = width / 30;
  }
}
