import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ArchiveMasonryComponent} from './archive-masonry.component';

describe('ArchiveMasonryComponent', () => {
  let component: ArchiveMasonryComponent;
  let fixture: ComponentFixture<ArchiveMasonryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchiveMasonryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveMasonryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
