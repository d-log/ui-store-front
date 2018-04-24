import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MasonryTileImageDefaultComponent} from './masonry-tile-image-default.component';

describe('ArchiveMasonryTileImageExternalDefaultComponent', () => {
  let component: MasonryTileImageDefaultComponent;
  let fixture: ComponentFixture<MasonryTileImageDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MasonryTileImageDefaultComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasonryTileImageDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
