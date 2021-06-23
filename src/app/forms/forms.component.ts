import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupName, Validators } from '@angular/forms';
import { RegisterService } from '../register.service';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  constructor(private register: RegisterService, private datepipe: DatePipe) { }
  get pincode(): FormControl {
    return this.formObj.get('pincode');
  }
  result1: any = [];

  formObj: any = new FormGroup({
    pincode: new FormControl('', Validators.required),
    date: new FormControl('')
  });
  newDate: any;
  ngOnInit(): void {
  }
  onSubmit(): void {
    console.log(this.formObj.value);
    console.log(this.formObj.value.pincode);
    console.log(this.formObj.value.date);
    this.newDate = this.datepipe.transform(this.formObj.value.date, 'dd-MM-yyyy');
    console.log(this.newDate);
    this.register.getByPincode(this.formObj.value.pincode, this.newDate).subscribe(data => {
      // console.log(data)
      this.result1 = data.sessions;
      console.log(this.result1);
    });
  }
}
