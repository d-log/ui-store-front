import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TedtComponent } from './tedt.component';

describe('TedtComponent', () => {
  let component: TedtComponent;
  let fixture: ComponentFixture<TedtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TedtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TedtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
