import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentMasterComponent } from './student-master/student-master.component';
import { SubjectClassMapComponent } from './subject-class-map/subject-class-map.component';
import { SubjectMasterComponent } from './subject-master/subject-master.component';
import { StudentMarksComponent } from './student-marks/student-marks.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    SubjectClassMapComponent,
    SubjectMasterComponent,
    StudentMasterComponent,
    StudentMarksComponent,
    DashboardComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    LoginSignupComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
