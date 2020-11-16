import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-t-form',
  templateUrl: './t-form.component.html',
  styleUrls: ['./t-form.component.css']
})
export class TFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  log(course){
    console.log(course);
  }

  submitCourse(courseForm){
    console.log("Handling the submit button")
    console.log(courseForm);
 const { coursename }=    courseForm.value;
    console.log(`course name entered is ${coursename}`)

  }
}
