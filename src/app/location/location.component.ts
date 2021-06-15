import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';
@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
  longitude: any;
  latitude: any;
  location: any = [];

  constructor(private register: RegisterService) { }

  ngOnInit(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {

        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        console.log(this.longitude);
        console.log(this.latitude);
        this.register.getByLatAndLong(this.latitude, this.longitude).subscribe(data => {
          console.log(data);

          this.location = data;
          console.log(this.location)
          console.log('this is change');
        });

      });
    }

    // else {
    //   alert("Geolocation is not supported by this browser.");
    // }


  }


}
