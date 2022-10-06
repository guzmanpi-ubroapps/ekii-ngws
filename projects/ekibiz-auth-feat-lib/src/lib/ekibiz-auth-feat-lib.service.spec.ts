import { TestBed } from '@angular/core/testing';

import { EkibizAuthFeatLibService } from './ekibiz-auth-feat-lib.service';

describe('EkibizAuthFeatLibService', () => {
  let service: EkibizAuthFeatLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EkibizAuthFeatLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
