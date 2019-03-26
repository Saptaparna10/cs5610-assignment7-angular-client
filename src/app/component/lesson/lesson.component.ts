import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {LessonService} from '../../service/LessonService';
// @ts-ignore
import {Lesson} from '../../model/lesson.model.client';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css']
})
export class LessonComponent implements OnInit {

  courseId;
  moduleId;
  lessonId;
  lessons: Lesson[] = [];

  constructor(private service: LessonService,
              private route: ActivatedRoute) {
    this.route.params.subscribe(
      params => this.setParams(params));
  }

  setParams(params) {
    this.courseId = params.courseId;
    this.moduleId = params.moduleId;
    this.lessonId = params.lessonId;
    this.loadLessons();
  }

  loadLessons() {
    if (this.courseId !== undefined && this.moduleId !== undefined) {
      this.service.findAllLessonsForModule(this.courseId, this.moduleId)
        .then(lessons => this.lessons = lessons);
    }
  }

  ngOnInit() {
  }

}
