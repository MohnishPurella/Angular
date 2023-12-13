import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'templateDrivenForms';
  roles = [
    {name: 'Select Role', value:''},
    {name: 'Development', value: 'development'},
    {name: 'Analyst', value: 'analyst'},
    {name: 'Testing', value: 'testing'},
    {name: 'Digital Marketing', value:'digitalMarketing'}
  ];
}
