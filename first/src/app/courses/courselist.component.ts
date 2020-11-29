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
    this.retrieveAll()
  }

  retrieveAll(): void {
    this.couseService.retrieveAll().subscribe({
      next: courses => {
        this._courses = courses
        this.filteredCourses = this._courses
      },
      error: err => console.log('Erro', err)
    })
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

  deleteById(courseId: number): void {
    this.couseService.deleteById(courseId).subscribe({
      next: () => {
        console.log('Apagado com sucesso')
        this.retrieveAll()
      },
      error: err => console.log('Repita o processo devido ao seguinte erro .', err)
    })
  }
}
