import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MasonryTileTextMarkdownDefaultComponent} from './masonry-tile-text-markdown-default.component';

describe('MasonryTileTextMarkdownDefaultComponent', () => {
  let component: MasonryTileTextMarkdownDefaultComponent;
  let fixture: ComponentFixture<MasonryTileTextMarkdownDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MasonryTileTextMarkdownDefaultComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasonryTileTextMarkdownDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
