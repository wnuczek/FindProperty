import { TestBed } from '@angular/core/testing';

import { objectService } from './object.service';

describe('objectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: objectService = TestBed.get(objectService);
    expect(service).toBeTruthy();
  });
});
