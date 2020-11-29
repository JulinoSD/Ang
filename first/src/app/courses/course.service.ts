import { Courses } from './courses'

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CourseService {

  courseUrl: string = 'http://localhost:3100/api/courses'

  constructor(private httpClient: HttpClient){

  }

  retrieveAll(): Observable<Courses[]> {
    return this.httpClient.get<Courses[]>(this.courseUrl)
  }

  retrieveById(id: number): Observable <Courses> {
    return this.httpClient.get<Courses>(`${this.courseUrl}/${id}`)
  }

  save(course: Courses): Observable<Courses> {
    if(course.id){
      return this.httpClient.put<Courses>(`${this.courseUrl}/${course.id}`, course)
    } else {
      return this.httpClient.post<Courses>(`${this.courseUrl}`, course)
    }
  }

  deleteById(id: number): Observable<any> {

    return this.httpClient.delete<any>(`${this.courseUrl}/${id}`)

  }

}
