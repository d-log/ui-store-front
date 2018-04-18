import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ArchiveMasonryTileComponent} from './archive-masonry-tile.component';

describe('ArchiveMasonryTileComponentTwo', () => {
  let component: ArchiveMasonryTileComponent;
  let fixture: ComponentFixture<ArchiveMasonryTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchiveMasonryTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveMasonryTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
