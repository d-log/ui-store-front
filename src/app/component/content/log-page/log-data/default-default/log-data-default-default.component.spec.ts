import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LogDataDefaultDefaultComponent} from './log-data-default-default.component';

describe('ArchiveMasonryTileImageExternalDefaultComponent', () => {
  let component: LogDataDefaultDefaultComponent;
  let fixture: ComponentFixture<LogDataDefaultDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LogDataDefaultDefaultComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogDataDefaultDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
