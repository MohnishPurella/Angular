import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = "Pipe";
  name1 = "angular";
  messageClasses = {
    "text-sucess": "true",
    "text-danger": "false",
    "text-special": "true"
  }
  date = new Date();

  showStringData = false;
  showJsonData = false;
  showNumData = false;
  showPercentageData = false;
  showCurrencyData = false;
  showDateData = false;
  showSqrtData = false;
  showString(){
    this.showStringData = true;
    this.showJsonData = false;
    this.showNumData = false;
    this.showPercentageData = false;
    this.showCurrencyData = false;
    this.showDateData = false;
    this.showSqrtData = false;
  }

  showJson(){
    this.showStringData = false;
    this.showJsonData = true;
    this.showNumData = false;
    this.showPercentageData = false;
    this.showCurrencyData = false;
    this.showDateData = false;
    this.showSqrtData = false;
  }

  showNum(){
    this.showStringData = false;
    this.showJsonData = false;
    this.showNumData = true;
    this.showPercentageData = false;
    this.showCurrencyData = false;
    this.showDateData = false;
    this.showSqrtData = false;
  }

  showPercentage(){
    this.showStringData = false;
    this.showJsonData = false;
    this.showNumData = false;
    this.showPercentageData = true;
    this.showCurrencyData = false;
    this.showDateData = false;
    this.showSqrtData = false;
  }

  showCurrency(){
    this.showStringData = false;
    this.showJsonData = false;
    this.showNumData = false;
    this.showPercentageData = false;
    this.showCurrencyData = true;
    this.showDateData = false;
    this.showSqrtData = false;
  }

  showDate(){
    this.showStringData = false;
    this.showJsonData = false;
    this.showNumData = false;
    this.showPercentageData = false;
    this.showCurrencyData = false;
    this.showDateData = true;
    this.showSqrtData = false;
  }

  showSqrt(){
    this.showStringData = false;
    this.showJsonData = false;
    this.showNumData = false;
    this.showPercentageData = false;
    this.showCurrencyData = false;
    this.showDateData = false;
    this.showSqrtData = true;
  }
}
