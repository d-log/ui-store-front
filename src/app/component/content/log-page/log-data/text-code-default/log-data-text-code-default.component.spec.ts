import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LogDataTextCodeDefaultComponent} from './log-data-text-code-default.component';

describe('MasonryTileTextMarkdownDefaultComponent', () => {
  let component: LogDataTextCodeDefaultComponent;
  let fixture: ComponentFixture<LogDataTextCodeDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LogDataTextCodeDefaultComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogDataTextCodeDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
