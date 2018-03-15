import { TestBed, inject } from '@angular/core/testing';

import { ProgressoService } from './progresso.service';

describe('ProgressoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProgressoService]
    });
  });

  it('should be created', inject([ProgressoService], (service: ProgressoService) => {
    expect(service).toBeTruthy();
  }));
});
