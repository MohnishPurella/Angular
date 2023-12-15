import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsListComponent } from './Components/students-list/students-list.component';
import { StudentsDetailsComponent } from './Components/students-details/students-details.component';
import { CarComponent } from './Components/car/car.component';
import { StudentsService } from './Services/Students/students.service';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    StudentsListComponent,
    StudentsDetailsComponent,
    CarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    StudentsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
