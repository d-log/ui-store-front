import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ArchiveMasonryTileVideoYoutubeDefaultComponent} from './archive-masonry-tile-video-youtube-default.component';

describe('ArchiveMasonryTileVideoYoutubeDefaultComponent', () => {
  let component: ArchiveMasonryTileVideoYoutubeDefaultComponent;
  let fixture: ComponentFixture<ArchiveMasonryTileVideoYoutubeDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchiveMasonryTileVideoYoutubeDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveMasonryTileVideoYoutubeDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
