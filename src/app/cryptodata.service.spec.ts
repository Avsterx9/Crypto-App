import { TestBed } from '@angular/core/testing';

import { CryptodataService } from './cryptodata.service';

describe('CryptodataService', () => {
  let service: CryptodataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CryptodataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
