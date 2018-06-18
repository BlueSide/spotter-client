import { TestBed, inject } from '@angular/core/testing';

import { BallsportsService } from './ballsports.service';

describe('BallsportsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BallsportsService]
    });
  });

  it('should be created', inject([BallsportsService], (service: BallsportsService) => {
    expect(service).toBeTruthy();
  }));
});
