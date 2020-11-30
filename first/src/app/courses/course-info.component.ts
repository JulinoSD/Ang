import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from './course.service';
import { Courses } from './courses';

@Component({
  templateUrl: './course-info.component.html'
})

export class CourseInfoComponent implements OnInit {

  course: Courses

  constructor(private activatedRoute: ActivatedRoute, private courseService: CourseService) {

  }

  ngOnInit(): void {
    this.courseService.retrieveById(+this.activatedRoute.snapshot.paramMap.get('id')).subscribe({
      next: course => this.course = course,
      error: err => console.log('Erro', err)
    })
  }

  save(): void {
    this.courseService.save(this.course).subscribe({
      next: course => console.log('Curso salvo com sucesso', course),
      error: err => console.log('Erro ', err)
    })
  }
}
