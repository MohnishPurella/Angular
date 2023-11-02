import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  message: string = "Hello Parent!"

  @Output() messageEvent = new EventEmitter<string>();

  constructor() { }
  ngOnInit() {
    
  }

  sendMessage() {
    this.messageEvent.emit(this.message)
  }

}
