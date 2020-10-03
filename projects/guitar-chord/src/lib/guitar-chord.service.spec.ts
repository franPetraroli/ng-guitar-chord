import { TestBed } from '@angular/core/testing';

import { GuitarChordService } from './guitar-chord.service';

describe('GuitarChordService', () => {
  let service: GuitarChordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuitarChordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
