import { Component } from '@angular/core';
import { Subject } from '../models/subject.model';
import { SubjectService } from '../services/subject.service';



@Component({
  selector: 'app-subject-master',
  templateUrl: './subject-master.component.html',
  styleUrl: './subject-master.component.scss',
})
export class SubjectMasterComponent {

subject : Subject = new Subject();

  constructor(private subjectService:SubjectService) {}

  addSubject(){
    this.subjectService.createSubject(this.subject).subscribe(x=>{

    })
  }
  

}
