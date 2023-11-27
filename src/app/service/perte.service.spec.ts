import { TestBed } from '@angular/core/testing';

import { PerteService } from './perte.service';

describe('PerteService', () => {
  let service: PerteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PerteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
