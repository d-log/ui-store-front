import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NavigationWidgetHomeComponent} from './navigation-widget-home.component';

describe('ArchiveMasonryTileImageExternalDefaultComponent', () => {
  let component: NavigationWidgetHomeComponent;
  let fixture: ComponentFixture<NavigationWidgetHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationWidgetHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationWidgetHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
