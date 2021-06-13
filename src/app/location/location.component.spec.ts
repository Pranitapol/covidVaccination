import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationComponent } from './location.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { RegisterService } from '../register.service';
describe('LocationComponent', () => {
  let component: LocationComponent;
  let fixture: ComponentFixture<LocationComponent>;

  // beforeEach(async () => {
  //   await TestBed.configureTestingModule({
  //     declarations: [ LocationComponent ]
  //   })
  //   .compileComponents();
  // });

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(LocationComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
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
