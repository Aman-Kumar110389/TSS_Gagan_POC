import { TestBed } from '@angular/core/testing';

import { FirstProviderService } from './first-provider.service';

describe('FirstProviderService', () => {
  let service: FirstProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirstProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
