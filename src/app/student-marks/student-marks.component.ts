import { Component } from '@angular/core';
import { StudentMarks } from '../models/student-marks.model';
import { StudentMarksService } from '../services/student-marks.service';

@Component({
  selector: 'app-student-marks',
  templateUrl: './student-marks.component.html',
  styleUrl: './student-marks.component.scss'
})
export class StudentMarksComponent {
  studentMarks: StudentMarks = new StudentMarks()


   
  constructor( private studentMarksService: StudentMarksService) { }
  
  addStudentMarks(){
    this.studentMarksService.createStudentMarks(this.studentMarks).subscribe(x=>{
      
    })
  }

}
