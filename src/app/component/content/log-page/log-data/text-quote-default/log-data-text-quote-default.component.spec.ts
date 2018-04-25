import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LogDataTextQuoteDefaultComponent} from './log-data-text-quote-default.component';

describe('MasonryTileTextMarkdownDefaultComponent', () => {
  let component: LogDataTextQuoteDefaultComponent;
  let fixture: ComponentFixture<LogDataTextQuoteDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LogDataTextQuoteDefaultComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogDataTextQuoteDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
