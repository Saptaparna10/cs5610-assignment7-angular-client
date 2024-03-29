import { Component, OnInit } from '@angular/core';
import {CourseService} from '../../service/CourseService';

@Component({
  selector: 'app-course-grid',
  templateUrl: './course-grid.component.html',
  styleUrls: ['./course-grid.component.css']
})
export class CourseGridComponent implements OnInit {

  constructor(private service: CourseService) {
    console.log('grid!!!!!');
  }

  courses = [];

  ngOnInit() {
    this.service
      .findAllCourses()
      .then(courses => this.courses = courses);
  }

}
