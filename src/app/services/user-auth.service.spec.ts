
import { TestBed } from '@angular/core/testing';

import { UserluthService } from './user-auth.service';

describe('UserAuthService', () => {
  let service: UserluthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserluthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
