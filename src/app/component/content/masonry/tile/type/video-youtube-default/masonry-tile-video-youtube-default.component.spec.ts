import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MasonryTileVideoYoutubeDefaultComponent} from './masonry-tile-video-youtube-default.component';

describe('MasonryTileVideoYoutubeDefaultComponent', () => {
  let component: MasonryTileVideoYoutubeDefaultComponent;
  let fixture: ComponentFixture<MasonryTileVideoYoutubeDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasonryTileVideoYoutubeDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasonryTileVideoYoutubeDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
