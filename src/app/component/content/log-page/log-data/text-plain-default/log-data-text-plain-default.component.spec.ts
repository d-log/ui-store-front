import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LogDataTextPlainDefaultComponent} from './log-data-text-plain-default.component';

describe('LogDataTextPlainDefaultComponent', () => {
  let component: LogDataTextPlainDefaultComponent;
  let fixture: ComponentFixture<LogDataTextPlainDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogDataTextPlainDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogDataTextPlainDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
