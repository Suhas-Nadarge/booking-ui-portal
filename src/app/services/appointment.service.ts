import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  constructor(public _http: HttpClient) { }

  getAllDoctors(): any{
    return this._http.get(`${environment.base_url}/getAllDoctors`);
  }

  bookAppointment(requestObj: any): any{
    return this._http.post(`${environment.base_url}/bookAppointment`, requestObj,this.httpOptions);
  }

  getDocsAppointments(id: any): any{
    return this._http.get(`${environment.base_url}/getDocsAppointments/${id}`,this.httpOptions);
  }
  
  cancelAppointment(requestObj: any): any{
    return this._http.post(`${environment.base_url}/cancel`, requestObj,this.httpOptions);
  }
}
