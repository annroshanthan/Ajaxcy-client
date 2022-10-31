import { TestBed } from '@angular/core/testing';

import { JwtTokenInterCeptorService } from './jwt-token-inter-ceptor.service';

describe('JwtTokenInterCeptorService', () => {
  let service: JwtTokenInterCeptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JwtTokenInterCeptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
