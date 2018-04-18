import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ArchiveMasonryTileTextPlainDefaultComponent} from './archive-masonry-tile-text-plain-default.component';

describe('ArchiveMasonryTileTextPlainDefaultComponent', () => {
  let component: ArchiveMasonryTileTextPlainDefaultComponent;
  let fixture: ComponentFixture<ArchiveMasonryTileTextPlainDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchiveMasonryTileTextPlainDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveMasonryTileTextPlainDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
