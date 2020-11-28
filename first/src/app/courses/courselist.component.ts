import { Component, OnInit } from '@angular/core'
import { CourseService } from './course.service';
import { Courses } from './courses'

@Component({
  templateUrl: './courselist.component.html'
})
export class CoursesListComponent implements OnInit {
  filteredCourses: Courses[] = []

  _courses: Courses[] = [];
  _filterBy: string

  constructor(private couseService: CourseService) { }

  ngOnInit(): void {
    this._courses = this.couseService.retrieveAll()
    this.filteredCourses = this._courses
  }

  set filter(value: string) {
    this._filterBy = value
    this.filteredCourses = this._courses.filter(
      (kourse: Courses) => kourse.name.toLocaleLowerCase()
        .indexOf(this._filterBy.toLocaleLowerCase()) > -1
    )
  }

  get filter() {
    return this._filterBy
  }
}
