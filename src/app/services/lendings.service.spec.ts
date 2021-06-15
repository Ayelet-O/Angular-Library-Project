import { TestBed } from '@angular/core/testing';

import { LendingsService } from './lendings.service';

describe('LendingsService', () => {
  let service: LendingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LendingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
