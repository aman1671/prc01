import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StudentMasterComponent } from './student-master/student-master.component';
import { SubjectMasterComponent } from './subject-master/subject-master.component';
import { SubjectClassMapComponent } from './subject-class-map/subject-class-map.component';
import { StudentMarksComponent } from './student-marks/student-marks.component';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';



const routes: Routes = [{ path: 'loginSignup', component: LoginSignupComponent },  
  { path: '', redirectTo: '/loginSignup', pathMatch: 'full' },  
  {path:'dashboard',component:DashboardComponent},
  { path: 'student-master', component: StudentMasterComponent },
  { path: 'subject-master', component: SubjectMasterComponent },
  {path: 'subject-class-map', component:SubjectClassMapComponent},
  {path:'student-marks', component:StudentMarksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
