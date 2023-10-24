import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'binding';
  showInterpolation:boolean = false;
  showPropertyBinding:boolean = false;

  showInterpolationFun(){
    this.showInterpolation = true;
    this.showPropertyBinding = false;
  }

  showPropertyBindingFun(){
    this.showInterpolation = false;
    this.showPropertyBinding = true;
  }
}
