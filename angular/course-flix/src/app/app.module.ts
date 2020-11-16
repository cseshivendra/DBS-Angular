import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { CoursesComponent } from './courses/courses.component';
import { RatingComponent } from './rating/rating.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TwoWayComponent } from './two-way/two-way.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routes } from './routes';
import { ChildOneComponent } from './child-one/child-one.component';
import { ChildTwoComponent } from './child-two/child-two.component';
import { CreateCourseComponent } from './create-course/create-course.component';
import { TFormComponent } from './t-form/t-form.component';
import { RFormComponent } from './r-form/r-form.component';
import { FilterCoursePipe } from './filter-course.pipe';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { HttpClientInterceptor } from './HttpClientInterceptor';
import { LoggingInterceptor} from './LoggingInterceptor';
import { AuthInterceptor } from './AuthInterceptor';
import { FormatterDirective } from './formatter.directive';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    CoursesComponent,
    RatingComponent,
    HeaderComponent,
    FooterComponent,
    CourseDetailsComponent,
    AboutComponent,
    ServicesComponent,
    NotFoundComponent,
    TwoWayComponent,
    ChildOneComponent,
    ChildTwoComponent,
    CreateCourseComponent,
    TFormComponent,
    RFormComponent,
    FilterCoursePipe,
    FormatterDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoggingInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpClientInterceptor,
      multi: true
    }
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
