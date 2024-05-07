import { TestBed } from '@angular/core/testing';

import { ConfirmPasswodService } from './confirm-password.service';

describe('ConfirmPasswordService', () => {
  let service: ConfirmPasswodService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfirmPasswodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
