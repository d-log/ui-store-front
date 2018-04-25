import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LogDataTextMarkdownDefaultComponent} from './log-data-text-markdown-default.component';

describe('LogDataTextMarkdownDefaultComponent', () => {
  let component: LogDataTextMarkdownDefaultComponent;
  let fixture: ComponentFixture<LogDataTextMarkdownDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LogDataTextMarkdownDefaultComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogDataTextMarkdownDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
