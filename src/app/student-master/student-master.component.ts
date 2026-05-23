import { Component } from '@angular/core';
import { Student } from '../models/student.model';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-student-master',
  templateUrl: './student-master.component.html',
  styleUrl: './student-master.component.scss',
})
export class StudentMasterComponent {
 student: Student = new Student()
  
constructor(private studentService: StudentService) { }

addStudent(){
  this.studentService.createStudent(this.student).subscribe(x=>{
    
  })
}


}




