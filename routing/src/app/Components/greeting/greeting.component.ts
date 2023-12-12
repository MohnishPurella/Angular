import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})
export class GreetingComponent {
  constructor(
    private activeRoute:ActivatedRoute
  ){}
  
  user = '';

  ngOnInit(): void {
    this.activeRoute.queryParams.subscribe(resp => {
      this.user = resp['name'];
    })
  }
}
