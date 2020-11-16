import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Course } from '../Course';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-r-form',
  templateUrl: './r-form.component.html',
  styleUrls: ['./r-form.component.css']
})
export class RFormComponent implements OnInit {

  constructor(private coursService: CourseService, private router: Router) { }

  ngOnInit(): void {
  }

  courseForm = new FormGroup({
    coursename: new FormControl('',[
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(12)
    ]),
    courseprice: new FormControl('',[
      Validators.required
    ]),
    courseduration: new FormControl('',[
      Validators.required
    ])
  })

  get coursename(){
    return this.courseForm.get("coursename");
  }

  get courseprice(){
    return this.courseForm.get("courseprice");
  }


  get courseduration(){
    return this.courseForm.get("courseduration");
  }

  formSubmission(form){
    const{coursename, courseprice, courseduration} = form.value;
    console.log(`${coursename} and ${courseprice}` );

    //create course object
    let course:any  = {}
    course.duration = courseduration;
    course.id  = Math.floor(Math.random() * 1000);
    course.name = coursename;
    course.price = courseprice;
    course.imgPath='';
    course.rating = 5;
    course.startDate = new Date().toISOString();
    course.students = 0;
    course.duration = 15;

    this.coursService.addCourse(course);

    this.router.navigate(['']);
  }

}
