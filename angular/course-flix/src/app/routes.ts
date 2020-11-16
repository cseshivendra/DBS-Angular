import { Route } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthGuard } from './auth.guard';
import { ChildOneComponent } from './child-one/child-one.component';
import { ChildTwoComponent } from './child-two/child-two.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CoursesComponent } from './courses/courses.component';
import { CreateCourseComponent } from './create-course/create-course.component';
import { FormGuard } from './form.guard';
import { NotFoundComponent } from './not-found/not-found.component';
import { RFormComponent } from './r-form/r-form.component';
import { ServicesComponent } from './services/services.component';
import { SessionGuard } from './session.guard';
import { TFormComponent } from './t-form/t-form.component';
import { TwoWayComponent } from './two-way/two-way.component';

export const routes: Route[]=[
    {
      path:'',
      redirectTo: 'courses',
      pathMatch: 'full'
    },
    {
      path:'about',
      component: AboutComponent,
      canActivate: [SessionGuard, AuthGuard],
      canDeactivate: [FormGuard]
    },
    {
      path:'courses',
      component: CoursesComponent
    },
    {
      path:'create',
      component: CreateCourseComponent,
      children:[
          {
              path:'',
              redirectTo:'tform',
              pathMatch:'full'
          },
          {
              path:'tform',
              component:TFormComponent
          },
          {
            path:'rform',
            component:RFormComponent
          }
      ]
    },
    {
      path:'twoway',
      component: TwoWayComponent
    },
    {
      path:'courses/:id',
      component: CourseDetailsComponent
    },
    {
      path:'services',
      component: ServicesComponent,
      children:[
        {
            path:'',
            redirectTo: 'one',
            pathMatch:'full'
        },
        {
            path:'one',
            component: ChildOneComponent,
            canDeactivate: [FormGuard]
        },
        {
            path:'two',
            component: ChildTwoComponent
        }
      ]
      
    },
    {
      path:'**',
      component: NotFoundComponent
    }
  ]