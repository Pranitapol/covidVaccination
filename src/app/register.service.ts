import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserData } from './forms/user';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  // get states
  getData(): Observable<any> {
    return this.http.get<any>(`https://cdn-api.co-vin.in/api/v2/admin/location/states`);
  }

  // get by district
  getByDistrict(stateId: any): Observable<any> {
    return this.http.get<any>(`https://cdn-api.co-vin.in/api/v2/admin/location/districts/${stateId}`);
  }

  // get vaccination slot by district id
  getVaccineByDistrict(districtId: any, date: any): Observable<any> {
    return this.http.get<any>(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${districtId}&date=${date}`);
  }

  // get vaccination slots by pincode
  getByPincode(pincode: any, date: any): Observable<any> {
    return this.http.get<any>(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pincode}&date=${date}`);
  }

  // get vaccination slot by latitude and longitude
  getByLatAndLong(latitude: any, longitude: any): Observable<any> {
    return this.http.get<any>(`https://cdn-api.co-vin.in/api/v2/appointment/centers/public/findByLatLong?lat=${latitude}&long=${longitude}`);
  }


}
