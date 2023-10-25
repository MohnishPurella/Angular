import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DirectiveHomeComponent } from './components/directive-home/directive-home.component';
import { NgifComponent } from './components/directive-home/ngif/ngif.component';
import { NgForComponent } from './components/directive-home/ng-for/ng-for.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectiveHomeComponent,
    NgifComponent,
    NgForComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
