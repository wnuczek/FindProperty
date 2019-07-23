import { TestBed } from '@angular/core/testing';

import { AddSearchFormValidationService } from './add-search-form-validation.service';

describe('AddSearchFormValidationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddSearchFormValidationService = TestBed.get(AddSearchFormValidationService);
    expect(service).toBeTruthy();
  });
});
