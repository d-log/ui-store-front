import {inject, TestBed} from '@angular/core/testing';

import {LogModelService} from './log-model.service';

describe('LogModelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LogModelService]
    });
  });

  it('should be created', inject([LogModelService], (service: LogModelService) => {
    expect(service).toBeTruthy();
  }));
});
