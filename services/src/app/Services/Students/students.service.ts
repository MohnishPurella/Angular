import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { StudentModel } from 'src/app/Models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  private _url = "/assets/json/studentsData.json"
  constructor(
    private http: HttpClient
  ) { }

  getStudentsData(): Observable<StudentModel[]>{
    return this.http.get<StudentModel[]>(this._url)
                    .pipe(
                      catchError(this.errorHandler)
                    );
  }

  errorHandler(error: HttpErrorResponse): Observable<never>{
    return throwError(new Error(error.message || "Server Error"));
  }
}
