import { TestBed } from '@angular/core/testing';

import { PatternValidatorsService } from './patern-validators.service';

describe('PaternValidatorsService', () => {
  let service: PatternValidatorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatternValidatorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
