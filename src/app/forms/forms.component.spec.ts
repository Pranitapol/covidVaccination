import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsComponent } from './forms.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { RegisterService } from "../register.service";
describe('FormsComponent', () => {
  let component: FormsComponent;
  let fixture: ComponentFixture<FormsComponent>;

  // beforeEach(async () => {
  //   await TestBed.configureTestingModule({
  //     declarations: [ FormsComponent ]
  //   })
  //   .compileComponents();
  // });

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(FormsComponent);
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
