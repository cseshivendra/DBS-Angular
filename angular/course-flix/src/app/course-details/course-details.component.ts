import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseDetailsService } from '../course-details.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private courseDetailsServie: CourseDetailsService) { }

  courseDetails;  
  ngOnInit(): void {
    const courseId = this.route.snapshot.paramMap.get('id');
    this.courseDetailsServie.fetchCourseDetailsByCourseId(courseId).subscribe(course => this.courseDetails = course);
  }
}
