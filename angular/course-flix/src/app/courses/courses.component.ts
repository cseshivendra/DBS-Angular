import { Component, OnDestroy, OnInit} from '@angular/core';
import { Course } from 'src/app/Course';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html', 
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent  implements OnInit, OnDestroy{

  courses: Course[] = [];
  courseName: string;
  constructor(private cousrseService: CourseService){
    //no logic should go here. 
    //This should only be used for initialization purpose.
  }

  ngOnInit(): void {
    this.cousrseService.fetchAllCourses()
                        .subscribe(courses => {
                           console.log(`The data from the API is `)  ;
                           console.log(courses);
                           this.courses = courses
                          });
  }

  ngOnDestroy(): void {
    console.log("called when destroying the courses component....");
  }


closeRegistration(course: Course) {
  console.log(`Inside the parent container `)
  this.courses = this.courses.filter(c => course.name !== c.name )
}

registerNewCourse(): void{
  const newcourse = {
    id:34,
    name: 'CloudFormation',
    imgPath: '../../assets/img/k8s.png',
    start_date: '2020-20-20',
    price: 30000,
    duration: 30,
    students: 10,
    rating: 5.0
  }
  this.cousrseService.addCourse(newcourse);
}

filter({value}){
    const selectedCourses = this.courses.filter(course => course.name.toLowerCase() === value.toLowerCase(0));
    if (selectedCourses.length > 0){
      this.courses = selectedCourses;
    }
}

reset(){
  this.cousrseService.fetchAllCourses().subscribe(courses => this.courses = courses);
}

}
