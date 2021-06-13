import { TestBed } from '@angular/core/testing';

import { RegisterService } from './register.service';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
describe('RegisterService', () => {
  let service: RegisterService;

  // beforeEach(() => {
  //   TestBed.configureTestingModule({});
  //   service = TestBed.inject(RegisterService);
  // });

  // it('should be created', () => {
  //   expect(service).toBeTruthy();
  // });
  describe('RegisterService', () => {

    beforeEach(() => TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], 
      providers: [RegisterService]
    }));

     it('should be created', () => {
      const service: RegisterService = TestBed.get(RegisterService);
      expect(service).toBeTruthy();
     });

     it('should have getData function', () => {
      const service: RegisterService = TestBed.get(RegisterService);
      expect(service.getData).toBeTruthy();
     });

  });
});
