import { Component, OnInit } from '@angular/core';
import {CourseService} from '../../service/CourseService';
import {ActivatedRoute} from '@angular/router';
// @ts-ignore
import {Course} from '../../model/course.model.client';


@Component({
  selector: 'app-course-viewer',
  templateUrl: './course-viewer.component.html',
  styleUrls: ['./course-viewer.component.css']
})
export class CourseViewerComponent implements OnInit {

  courseId;
  course: Course;

  constructor(private courseService: CourseService, private route: ActivatedRoute) {
    console.log('viewer!!!!!')
    this.course = { id: '1' , title : 'dummy' };
    this.route.params.subscribe(
      params => this.courseId = params.courseId);

    if (this.courseId != null && this.courseId !== '') {
      this.courseService.findCourseById(this.courseId).
      then((course) => this.course = course);
    }
  }

  ngOnInit() {
  }

}
