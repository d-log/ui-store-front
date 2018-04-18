import {Component, HostListener, OnInit} from '@angular/core';
import {LogModel} from '../../../../service/log/model/log-model';
import {LogModelService} from '../../../../service/log/log-model.service';
import {Pageable} from '../../../../service/model/pageable';
import {LogType} from '../../../../service/log/model/log-type';
import {Masonry} from 'ng-masonry-grid';

@Component({
  selector: 'app-masonry-archive',
  templateUrl: './archive-masonry.component.html',
  styleUrls: ['./archive-masonry.component.css']
})
export class ArchiveMasonryComponent implements OnInit {
  millisecondThreshold: number;
  page: number;
  size: number;
  moreLogsExist: boolean;

  constructor(private logLightService: LogModelService) {
  }

  _masonry: Masonry;
  logModels: LogModel[];

  ngOnInit() {
    this.page = -1;
    this.size = 10;
    this.moreLogsExist = true;
    this.millisecondThreshold = new Date().getTime();
    this.logModels = [];
    this.getLogModels();
  }

  onNgMasonryInit($event: Masonry) {
    this._masonry = $event;
  }

  getLogModels(): void {
    if (this.moreLogsExist) {
      this.page++;

      this.logLightService.theGetterList(this.millisecondThreshold, new Pageable(this.page, this.size), LogType.TILE)
        .subscribe(logModels => {
          if (logModels.length === 0) {
            this.moreLogsExist = false;
          } else {
            this.appendItems(logModels);
          }
        });
    }
  }

  appendItems(logModels: LogModel[]) {
    if (this._masonry) { // Check if Masonry instance exists
      this._masonry.setAddStatus('append'); // set status to 'append'
      this.logModels = this.logModels.concat(logModels);
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if ((window.innerHeight + window.scrollY) >= document.body.clientHeight) {
      this.getLogModels();
    }
  }
}
