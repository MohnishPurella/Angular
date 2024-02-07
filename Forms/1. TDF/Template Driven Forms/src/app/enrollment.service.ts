import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { EmployeeModel } from './employeeModel';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  
  constructor( private _http: HttpClient) { }
  _url = 'http://localhost:3000/enroll';
  
  enroll(employee:EmployeeModel){
    return this._http.post<any>(this._url, employee)
            .pipe(catchError(this.errorHandler))
  }

  errorHandler(error: HttpErrorResponse){
    return throwError(error);
  }
}
