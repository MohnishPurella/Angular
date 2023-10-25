import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-home',
  templateUrl: './directive-home.component.html',
  styleUrls: ['./directive-home.component.css']
})
export class DirectiveHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showNgIf = false;

  showNgIfFun(){
    this.showNgIf = true;
  }
}
