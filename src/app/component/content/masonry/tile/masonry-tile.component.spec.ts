import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MasonryTileComponent} from './masonry-tile.component';

describe('LogDataComponentTwo', () => {
  let component: MasonryTileComponent;
  let fixture: ComponentFixture<MasonryTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasonryTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasonryTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
