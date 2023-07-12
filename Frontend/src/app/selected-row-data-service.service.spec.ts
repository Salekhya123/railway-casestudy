import { TestBed } from '@angular/core/testing';

import { SelectedRowDataServiceService } from './selected-row-data-service.service';

describe('SelectedRowDataServiceService', () => {
  let service: SelectedRowDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectedRowDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
