import { Component, OnInit } from '@angular/core';
import { StudentModel } from 'src/app/Models/student.model';
import { StudentsService } from 'src/app/Services/Students/students.service';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit{
  studentsData:StudentModel[] = [];
  errorMsg:any = null
  constructor(
    private _studentService: StudentsService
  ){}
  ngOnInit(): void {
    this._studentService.getStudentsData().subscribe(
      response => {
        this.studentsData = response;
      },
      error =>{
        this.errorMsg = error;
      }
    );
  }
}
