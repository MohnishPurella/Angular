import { Component, OnInit } from '@angular/core';
import { EmployeeModel } from './employeeModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{  
  title = 'templateDrivenForms';
  roles = [
    {name: 'Select Role', value:''},
    {name: 'Development', value: 'development'},
    {name: 'Analyst', value: 'analyst'},
    {name: 'Testing', value: 'testing'},
    {name: 'Digital Marketing', value:'digitalMarketing'}
  ];
  employeeData:EmployeeModel = new EmployeeModel();
  ngOnInit(): void {    
    this.employeeData = this.getEmployeeData();
    if(this.employeeData.role){
      this.roleHasError = false;
    }
  }

  getEmployeeData(): EmployeeModel {
    return{
      fname: "Mohnish",
      mname: "Swamy",
      lname: "Purella",
      gender: "male",
      dob: "15-05-1997",
      mobileNumber: 7075012545,
      role: "development",
      timePreference: "morning"
    }
  }

  roleHasError = true;

  validateRole(value:any){
    if(value == ''){
      this.roleHasError = true;
    }else{
      this.roleHasError = false;
    }
  }

  onSubmit(){
    
  }
}
