import { Component, OnInit, ViewChild } from '@angular/core';
import { Child1Component } from '../child1/child1.component';

@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.css']
})
export class Parent1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild(Child1Component) child: Child1Component | undefined;
  childMessage: any = null;

  seeChildMessage() {
    if (this.child) {
      this.childMessage = this.child.message;
    }
  }
}
