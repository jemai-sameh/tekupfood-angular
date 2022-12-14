import { TestBed } from '@angular/core/testing';

import { AuthIntercepterServiceService } from './auth-intercepter-service.service';

describe('AuthIntercepterServiceService', () => {
  let service: AuthIntercepterServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthIntercepterServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
