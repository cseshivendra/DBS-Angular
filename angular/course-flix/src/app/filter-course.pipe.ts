import { Pipe, PipeTransform } from '@angular/core';
import { Course } from './Course';

@Pipe({
  name: 'filterCourse'
})
export class FilterCoursePipe implements PipeTransform {

  transform(courses: Course[], ...args: string[]): Course[] {
    let value = args[0];
    if (value) {
      const selectedCourses = courses.filter(course => course.name.toLowerCase().startsWith(value.toLowerCase()));
      if (selectedCourses.length > 0){
        return selectedCourses;
     } 
    } else {
      return courses;
    }
  }

}
