import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NavigationWidgetSearchComponent} from './navigation-widget-search.component';

describe('ArchiveMasonryTileImageExternalDefaultComponent', () => {
  let component: NavigationWidgetSearchComponent;
  let fixture: ComponentFixture<NavigationWidgetSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NavigationWidgetSearchComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationWidgetSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
