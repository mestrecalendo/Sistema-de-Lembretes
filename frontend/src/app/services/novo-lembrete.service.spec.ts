import { TestBed } from '@angular/core/testing';

import { LembretesService } from './lembretes.service';

describe('NovoLembreteService', () => {
  let service: LembretesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LembretesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
