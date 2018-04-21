import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NavigationWidgetSettingComponent} from './navigation-widget-setting.component';

describe('ArchiveMasonryTileImageExternalDefaultComponent', () => {
  let component: NavigationWidgetSettingComponent;
  let fixture: ComponentFixture<NavigationWidgetSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationWidgetSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationWidgetSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
