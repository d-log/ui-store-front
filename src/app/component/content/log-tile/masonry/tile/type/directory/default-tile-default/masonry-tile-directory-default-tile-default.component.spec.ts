import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MasonryTileDirectoryDefaultTileDefaultComponent} from './masonry-tile-directory-default-tile-default.component';

describe('ArchiveMasonryTileImageExternalDefaultComponent', () => {
  let component: MasonryTileDirectoryDefaultTileDefaultComponent;
  let fixture: ComponentFixture<MasonryTileDirectoryDefaultTileDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MasonryTileDirectoryDefaultTileDefaultComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasonryTileDirectoryDefaultTileDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
