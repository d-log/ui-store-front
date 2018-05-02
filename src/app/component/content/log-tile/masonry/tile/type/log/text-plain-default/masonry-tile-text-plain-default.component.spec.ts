import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MasonryTileTextPlainDefaultComponent} from './masonry-tile-text-plain-default.component';

describe('MasonryTileTextMarkdownDefaultComponent', () => {
  let component: MasonryTileTextPlainDefaultComponent;
  let fixture: ComponentFixture<MasonryTileTextPlainDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MasonryTileTextPlainDefaultComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasonryTileTextPlainDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
