import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MasonryTileDefaultTileDefaultComponent} from './masonry-tile-default-tile-default.component';

describe('ArchiveMasonryTileImageExternalDefaultComponent', () => {
  let component: MasonryTileDefaultTileDefaultComponent;
  let fixture: ComponentFixture<MasonryTileDefaultTileDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasonryTileDefaultTileDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasonryTileDefaultTileDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
