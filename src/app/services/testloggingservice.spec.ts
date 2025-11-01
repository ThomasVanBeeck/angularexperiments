import { TestBed } from '@angular/core/testing';

import { TestLoggingService } from './testloggingservice';

describe('Testloggingservice', () => {
  let service: TestLoggingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestLoggingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
