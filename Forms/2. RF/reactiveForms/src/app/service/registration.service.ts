import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(
    private _http:HttpClient
  ) { }

  _url = 'http://localhost:2000/register';

  register(userData:any){
    return this._http.post<any>(this._url, userData);
  }
}
