import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ArchiveMasonryTileDefaultTileDefaultComponent} from './archive-masonry-tile-default-tile-default.component';

describe('ArchiveMasonryTileImageExternalDefaultComponent', () => {
  let component: ArchiveMasonryTileDefaultTileDefaultComponent;
  let fixture: ComponentFixture<ArchiveMasonryTileDefaultTileDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchiveMasonryTileDefaultTileDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveMasonryTileDefaultTileDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
