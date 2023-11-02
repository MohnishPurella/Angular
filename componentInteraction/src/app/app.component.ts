import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'componentInteraction';
  showInputData = false;
  showViewChildData = false;
  showOutputndEventEmitterData = false;
  showServiceData = false;

  showInputFun(){
    this.showInputData = true;
    this.showViewChildData = false;
    this.showOutputndEventEmitterData = false;
    this.showServiceData = false;
  }
  showViewChildFun(){
    this.showInputData = false;
    this.showViewChildData = true;
    this.showOutputndEventEmitterData = false;
    this.showServiceData = false;
  }
  showOutputndEventEmitterFun(){
    this.showInputData = false;
    this.showViewChildData = false;
    this.showOutputndEventEmitterData = true;
    this.showServiceData = false;
  }
  showServiceFun(){
    this.showInputData = false;
    this.showViewChildData = false;
    this.showOutputndEventEmitterData = false;
    this.showServiceData = true;
  }
}
