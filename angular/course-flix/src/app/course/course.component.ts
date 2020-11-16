import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/app/Course';
import { CourseService } from '../course.service';

@Component({ selector: 'app-course', 
      templateUrl: './course.component.html', 
      styleUrls: ['./course.component.css'] 
    }) 
export class CourseComponent  implements OnInit, OnDestroy, OnChanges {

    @Input('data') course: Course;

    @Output('full') full = new EventEmitter();

    constructor(private courseService: CourseService, private router: Router){
        console.log('Inside the constructor ....')
    }

    ngOnInit(){
        console.log('Inside the initialization method')
    }

    ngOnDestroy(){
        console.log('Inside the destroy method');
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log('any time there is a changes.. this will be triggered ....');
        console.log(changes.previousValue);         
    }

    enroll(name ){
        console.log(`Enrolling to ${name} course`);
        this.course.students ++;
        if (this.course.students >= 20){
            this.full.emit(this.course);
        }
    }

    fetchCourseDetails(course){
        this.router.navigate(['courses', course.id]);
    }

}
