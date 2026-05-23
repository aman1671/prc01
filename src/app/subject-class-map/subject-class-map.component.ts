import { Component } from '@angular/core';
import { SubjectClassMap } from '../models/subjectclassmap.model';
import { SubjectClassMapService } from '../services/subject-class-map.service';


@Component({
  selector: 'app-subject-class-map',
  templateUrl: './subject-class-map.component.html',
  styleUrls: ['./subject-class-map.component.scss']
})
export class SubjectClassMapComponent {
  
subjectClassMap: SubjectClassMap = new SubjectClassMap()
    
  constructor(private subjectclassmapService : SubjectClassMapService) { }

  addsubjectClassMap(){
    this.subjectclassmapService.createSubjectClassMap(this.subjectClassMap).subscribe(x=>{
      
    })
  }
  

  
}
