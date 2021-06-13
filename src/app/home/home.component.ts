import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';
import { FormGroup, FormControl } from '@angular/forms';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  stateResult: any = [];
  districts: any = [];
  getSlots: any = [];
  selectedValue: any;
  selectedValue1: any;
  newDate: any;
  constructor(private register: RegisterService, private datePipe: DatePipe) { }

  formObj = new FormGroup({
    date: new FormControl('')
  });

  // get data of states
  ngOnInit(): void {
    this.register.getData().subscribe(data => {
      console.log(data);
      this.stateResult = data.states;
    });



  }
  // get district by state name
  selectChangeHandler(event: any) {

    this.selectedValue = event.target.value;

    this.register.getByDistrict(this.selectedValue).subscribe(data => {
      console.log(data);
      this.districts = data;
    });
  }

  // select district from Dropdown
  selectChangeHandler1(event: any) {

    this.selectedValue1 = event.target.value;


  }

  // getting slots by district id
  onSubmit() {
    console.log(this.formObj.value);
    console.log(this.selectedValue1);
    // this.selectedValue1=this.result4.district_id;
    // console.log(this.selectedValue1);

    // change Date format
    this.newDate = this.datePipe.transform(this.formObj.value.date, 'dd-MM-yyyy');

    this.register.getVaccineByDistrict(this.selectedValue1, this.newDate).subscribe(data => {
      console.log(data);
      this.getSlots = data;
      console.log(this.getSlots.sessions);
    });
  }

}
