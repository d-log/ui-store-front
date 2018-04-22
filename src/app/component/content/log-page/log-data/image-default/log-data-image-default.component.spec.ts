import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LogDataImageDefaultComponent} from './log-data-image-default.component';

describe('ArchiveMasonryTileImageExternalDefaultComponent', () => {
  let component: LogDataImageDefaultComponent;
  let fixture: ComponentFixture<LogDataImageDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogDataImageDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogDataImageDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
