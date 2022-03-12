import { environment } from './../../environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

   httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  constructor(public _http: HttpClient) { }

  registerUser(requestObj: any): any{
    return this._http.post(`${environment.base_url}/register`, requestObj,this.httpOptions);
  }

  loginUser(requestObj: any): any{
    return this._http.post(`${environment.base_url}/login`, requestObj,this.httpOptions);
  }
  
}