import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError, from,of } from 'rxjs';
import {catchError, filter, retry, map} from 'rxjs/operators';
import { Course } from 'src/app/Course';

@Injectable({
  providedIn: 'root'
}) 
export class CourseService {

  constructor(private httpClient: HttpClient){}

  API_URL='https://my-json-server.typicode.com/prashdeep/courseflix/courses/';

  fetchAllCourses(): Observable<Course[]>{
    
    const courses:Course[] = [
      {
        "id": 1,
        "name": "Angular",
        "imgPath": "../../assets/img/angular.png",
        "start_date": "2020-10-11",
        "price": 30000,
        "duration": 25,
        "rating": 4.367,
        "students": 20000
      },
      {
        "id": 2,
        "name": "React",
        "imgPath": "../../assets/img/react.png",
        "start_date": "2020-10-11",
        "price": 25000,
        "duration": 30,
        "rating": 4.677,
        "students": 15000
      },
      {
        "id": 3,
        "name": "Spring-Boot",
        "imgPath": "../../assets/img/spring-boot.png",
        "start_date": "2020-10-11",
        "price": 30000,
        "duration": 40,
        "rating": 4.321,
        "students": 14567
      },
      {
        "id": 4,
        "name": "Docker",
        "imgPath": "../../assets/img/docker.jpg",
        "start_date": "2020-10-11",
        "price": 15000,
        "duration": 10,
        "rating": 4,
        "students": 256777
      },
      {
        "id": 5,
        "name": "K8s",
        "imgPath": "../../assets/img/k8s.png",
        "start_date": "2020-10-11",
        "price": 30000,
        "duration": 25,
        "rating": 4.767,
        "students": 3768687
      }
    ];
    return of(courses);
    //return this.httpClient
     // .get<Course[]>(this.API_URL);
     /* .pipe(
        retry(5),
        filter(c =>  c.length > 1),
        catchError((error) =>{
          console.log(error);
          if(error.error instanceof ProgressEvent){
            window.alert(`Looks like you are unable to connect to Internet. Please check your Internet connection..`);  
          }else {
            window.alert(`Dont worry. Our monkeys are looking into the issues and will fix it soon.`);
          }
          return throwError(`${error.message}`)
        })
      );*/
  }

  

  addCourse(course:Course): Observable<void>{
    return this.httpClient.post<void>(this.API_URL, JSON.stringify(course));
  }
}
