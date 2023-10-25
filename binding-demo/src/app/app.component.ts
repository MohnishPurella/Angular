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
  showStyleBinding:boolean = false;
  showEventBinding:boolean = false;
  showTemplateReference:boolean = false;

  showInterpolationFun(){
    this.showInterpolation = true;
    this.showPropertyBinding = false;
    this.showClassBinding = false;
    this.showStyleBinding = false;
    this.showEventBinding = false;
    this.showTemplateReference = false;
  }

  showPropertyBindingFun(){
    this.showPropertyBinding = true;
    this.showInterpolation = false;
    this.showClassBinding = false;
    this.showStyleBinding = false;
    this.showEventBinding = false;
    this.showTemplateReference = false;
  }

  showClassBindingFun(){
    this.showClassBinding = true;
    this.showInterpolation = false;
    this.showPropertyBinding = false;
    this.showStyleBinding = false;
    this.showEventBinding = false;
    this.showTemplateReference = false;
  }

  showStyleBindingFun(){
    this.showStyleBinding = true;
    this.showClassBinding = false;
    this.showInterpolation = false;
    this.showPropertyBinding = false;
    this.showEventBinding = false;
    this.showTemplateReference = false;
  }

  showEventBindingFun(){
    this.showEventBinding = true;
    this.showStyleBinding = false;
    this.showClassBinding = false;
    this.showInterpolation = false;
    this.showPropertyBinding = false;
    this.showTemplateReference = false;
  }

  showTemplateReferenceVariableFun(){
    this.showTemplateReference = true;
    this.showEventBinding = false;
    this.showStyleBinding = false;
    this.showClassBinding = false;
    this.showInterpolation = false;
    this.showPropertyBinding = false;
  }
}
