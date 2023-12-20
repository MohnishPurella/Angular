import { Component, OnInit } from '@angular/core';
import { AddressModel, EmployeeModel } from './employeeModel';

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
  }

  getEmployeeData(): EmployeeModel {
    return{
      fname: "Mohnish",
      mname: "Swamy",
      lname: "Purella",
      gender: "male",
      dob: "15-05-1997",
      mobileNumber: 7075012545,
      address: this.getAddress(),
      role: "development",
      timePreference: "morning"
    }
  }

  getAddress():AddressModel{
    return{
      street: "Ramalayam opposite street",
      city: "Pedatadepalli",
      state: "Andhra Pradesh",
      postalCode: 534101
    }
  }
}
