import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import {userData  } from "./forms/user";
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }

  //get states
getData():Observable<any>{
  return this.http.get(`https://cdn-api.co-vin.in/api/v2/admin/location/states`);
}

//get by district
 getByDistrict(state_id:any){
   return this.http.get(`https://cdn-api.co-vin.in/api/v2/admin/location/districts/${state_id}`);
 }

 // get vaccination slot by district id
 getVaccineByDistrict(district_id:any,date:any){
return this.http.get(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${district_id}&date=${date}`) 
 }

 //get vaccination slots by pincode
getByPincode(pincode:any,date:any):Observable<any>{
  return this.http.get<any>(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pincode}&date=${date}`)
}

//get vaccination slot by latitude and longitude
getByLatAndLong(latitude:any,longitude:any){
  return this.http.get(`https://cdn-api.co-vin.in/api/v2/appointment/centers/public/findByLatLong?lat=${latitude}&long=${longitude}`);
}


}
