import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DirectiveHomeComponent } from './components/directive-home/directive-home.component';
import { NgifComponent } from './components/directive-home/ngif/ngif.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectiveHomeComponent,
    NgifComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
