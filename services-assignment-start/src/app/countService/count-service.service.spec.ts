import { TestBed, inject } from '@angular/core/testing';

import { CountServiceService } from './count-service.service';

describe('CountServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CountServiceService]
    });
  });

  it('should be created', inject([CountServiceService], (service: CountServiceService) => {
    expect(service).toBeTruthy();
  }));
});
