import { TestBed } from '@angular/core/testing';

import { DisplayItemService } from './display-item.service';

describe('DisplayItemService', () => {
  let service: DisplayItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisplayItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
