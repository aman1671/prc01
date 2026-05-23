import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StudentMarks } from '../models/student-marks.model';

@Injectable({
  providedIn: 'root'
})
export class StudentMarksService {
  
  private apiUrl = 'http://localhost:8086/studentMarks';
  constructor(private http: HttpClient) { }


  createStudentMarks(studentMarks: StudentMarks): Observable<StudentMarks> {
    return this.http.post<StudentMarks>(this.apiUrl, studentMarks);
  }

 
}
