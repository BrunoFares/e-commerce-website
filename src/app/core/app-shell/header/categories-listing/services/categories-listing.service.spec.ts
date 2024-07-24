import { TestBed } from '@angular/core/testing';

import { CategoriesListingService } from './categories-listing.service';

describe('CategoriesListingService', () => {
  let service: CategoriesListingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoriesListingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
