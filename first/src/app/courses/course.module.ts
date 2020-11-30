import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { StarModule } from '../shared/components/star/star.module';
import { ReplaceModule } from '../shared/pipe/replace.module';
import { CourseInfoComponent } from './course-info.component';
import { CoursesListComponent } from './courselist.component';

@NgModule({
  declarations: [
    CoursesListComponent,
    CourseInfoComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    StarModule,
    ReplaceModule,
    RouterModule.forChild([
      {
        path: 'courses', component: CoursesListComponent
      },
      {
        path: 'courses/info/:id', component: CourseInfoComponent
      },
    ]
    )
  ]
})

export class CourseModule {

}
