import { TestBed } from '@angular/core/testing';

import { NgMediumService } from './ng-medium.service';

describe('NgMediumService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgMediumService = TestBed.get(NgMediumService);
    expect(service).toBeTruthy();
  });
});
