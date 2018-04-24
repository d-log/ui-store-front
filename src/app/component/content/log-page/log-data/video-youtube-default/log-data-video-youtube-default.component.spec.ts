import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LogDataVideoYoutubeDefaultComponent} from './log-data-video-youtube-default.component';

describe('LogDataVideoYoutubeDefaultComponent', () => {
  let component: LogDataVideoYoutubeDefaultComponent;
  let fixture: ComponentFixture<LogDataVideoYoutubeDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LogDataVideoYoutubeDefaultComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogDataVideoYoutubeDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
