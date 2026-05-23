import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SubjectClassMap } from '../models/subjectclassmap.model';



@Injectable({
  providedIn: 'root'
})
export class SubjectClassMapService {

  private apiUrl = 'http://localhost:8086/subjectClassMaps';
   
  constructor(private http: HttpClient) { }

  

  createSubjectClassMap(subjectClassMap: SubjectClassMap): Observable<SubjectClassMap> {
    return this.http.post<SubjectClassMap>(this.apiUrl, subjectClassMap);
  }

}
