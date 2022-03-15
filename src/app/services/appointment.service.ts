import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  constructor(public _http: HttpClient) { }

  public $userSub = new Subject()

  setUserData(data: any): any {
    this.$userSub.next(data)
  }

  // setUserData(): any {

  // }

  getAllDoctors(): any{
    return this._http.get(`${environment.base_url}/getAllDoctors`);
  }

  bookAppointment(requestObj: any): any{
    return this._http.post(`${environment.base_url}/bookAppointment`, requestObj,this.httpOptions);
  }

  getDocsAppointments(requestObj: any): any{
    return this._http.post(`${environment.base_url}/getDocsAppointments`,requestObj, this.httpOptions);
  }
  
  cancelAppointment(requestObj: any): any{
    return this._http.post(`${environment.base_url}/cancel`, requestObj,this.httpOptions);
  }
}
