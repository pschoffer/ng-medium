import { TestBed } from '@angular/core/testing';

import { RssToJsonWrapperService } from './rss-to-json-wrapper.service';

describe('RssToJsonWrapperService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RssToJsonWrapperService = TestBed.get(RssToJsonWrapperService);
    expect(service).toBeTruthy();
  });
});
