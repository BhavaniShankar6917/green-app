import { TestBed } from '@angular/core/testing';

import { ImageSelectService } from './image-select.service';

describe('ImageSelectService', () => {
  let service: ImageSelectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageSelectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
