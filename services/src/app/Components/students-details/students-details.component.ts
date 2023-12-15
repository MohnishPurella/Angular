import { Component, OnInit } from '@angular/core';
import { StudentsService } from 'src/app/Services/Students/students.service';

@Component({
  selector: 'app-students-details',
  templateUrl: './students-details.component.html',
  styleUrls: ['./students-details.component.css']
})
export class StudentsDetailsComponent implements OnInit{
  studentsData:any = [];
  constructor(
    private _studentService: StudentsService
  ){}
  ngOnInit(): void {
    this._studentService.getStudentsData().subscribe(
      response => {this.studentsData = response}
    );
  }
}
