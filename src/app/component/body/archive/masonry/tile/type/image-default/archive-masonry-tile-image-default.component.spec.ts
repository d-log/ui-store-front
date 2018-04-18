import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ArchiveMasonryTileImageDefaultComponent} from './archive-masonry-tile-image-default.component';

describe('ArchiveMasonryTileImageExternalDefaultComponent', () => {
  let component: ArchiveMasonryTileImageDefaultComponent;
  let fixture: ComponentFixture<ArchiveMasonryTileImageDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchiveMasonryTileImageDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveMasonryTileImageDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
