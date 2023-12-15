import { Component } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent {
  car = new car();

  engine = new Engine("Petrol");
  tire = new Tires();
}

class Engine{
  constructor(engineType:any){}
}

class Tires{
  constructor(){}
}

class car{
  engine:any;
  tires:any;
  constructor(){
    this.engine = new Engine("petrolEngine");
    this.tires = new Tires();
  }
}

class car1{
  engine:any;
  tires:any;
  constructor(engine:any, tire:any){
    this.engine = engine;
    this.tires = tire;
  }
}
