import { TestBed } from '@angular/core/testing';

import { GeneroseriesService } from './generoseries.service';

describe('GeneroseriesService', () => {
  let service: GeneroseriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneroseriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
