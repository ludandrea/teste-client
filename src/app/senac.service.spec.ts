import { TestBed } from '@angular/core/testing';

import { SenacService } from './senac.service';

describe('SenacService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SenacService = TestBed.get(SenacService);
    expect(service).toBeTruthy();
  });
});
