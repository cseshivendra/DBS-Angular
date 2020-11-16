import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from './Course';

@Injectable({
  providedIn: 'root'
})
export class CourseDetailsService {

  API_URL='https://my-json-server.typicode.com/prashdeep/courseflix/courses/';

  constructor(private httpClient: HttpClient) { }

  fetchCourseDetailsByCourseId(courseId): Observable<Course>{
    return this.httpClient.get<Course>( `${this.API_URL}/${courseId}`);
  }
}
