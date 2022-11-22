import { TestBed } from '@angular/core/testing';

import { RegistroAvaliacaoService } from './registro-avaliacao.service';

describe('RegistroAvaliacaoService', () => {
  let service: RegistroAvaliacaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistroAvaliacaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
