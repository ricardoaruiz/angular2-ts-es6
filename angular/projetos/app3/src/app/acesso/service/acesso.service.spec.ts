import { TestBed, inject } from '@angular/core/testing';

import { AcessoServiceService } from './acesso-service.service';

describe('AcessoServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AcessoServiceService]
    });
  });

  it('should be created', inject([AcessoServiceService], (service: AcessoServiceService) => {
    expect(service).toBeTruthy();
  }));
});
