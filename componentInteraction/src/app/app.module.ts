import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ParentComponent } from './components/Input/parent/parent.component';
import { ChildComponent } from './components/Input/child/child.component';
import { Parent1Component } from './components/View Child/parent1/parent1.component';
import { Child1Component } from './components/View Child/child1/child1.component';
import { Parent2Component } from './components/Output() nd EventEmitter/parent2/parent2.component';
import { Child2Component } from './components/Output() nd EventEmitter/child2/child2.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    Parent1Component,
    Child1Component,
    Parent2Component,
    Child2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
