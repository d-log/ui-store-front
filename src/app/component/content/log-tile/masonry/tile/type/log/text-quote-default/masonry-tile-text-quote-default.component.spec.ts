import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MasonryTileTextQuoteDefaultComponent} from './masonry-tile-text-quote-default.component';

describe('MasonryTileTextMarkdownDefaultComponent', () => {
  let component: MasonryTileTextQuoteDefaultComponent;
  let fixture: ComponentFixture<MasonryTileTextQuoteDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MasonryTileTextQuoteDefaultComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasonryTileTextQuoteDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
