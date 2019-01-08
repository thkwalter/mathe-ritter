import { TestBed } from '@angular/core/testing';

import { ZufallszahlService } from './zufallszahl.service';

describe('ZufallszahlService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ZufallszahlService = TestBed.get(ZufallszahlService);
    expect(service).toBeTruthy();
  });
});
