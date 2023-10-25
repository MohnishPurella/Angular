import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {  
  showInterpolation:boolean = false;
  showPropertyBinding: boolean = false;
  showClassBinding:boolean = false;

  showInterpolationFun(){
    this.showInterpolation = true;
    this.showPropertyBinding = false;
    this.showClassBinding = false;
  }

  showPropertyBindingFun(){
    this.showPropertyBinding = true;
    this.showInterpolation = false;
    this.showClassBinding = false;
  }

  showClassBindingFun(){
    this.showClassBinding = true;
    this.showInterpolation = false;
    this.showPropertyBinding = false;
  }
}
