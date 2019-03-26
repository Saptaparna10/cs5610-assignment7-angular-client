import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WidgetService {

  location: string;
  COURSE_URL: string;
  HEROKU_BASE_URL = 'https://das-saptaparna-assignment5-jav.herokuapp.com/api/course';
  LOCAL_BASE_URL = 'http://localhost:8080/api/course';

  constructor() {
    this.location = window.location.href;
    if (!location.toString().includes('localhost')) {
      this.COURSE_URL = this.HEROKU_BASE_URL;
    } else {
      this.COURSE_URL =  this.LOCAL_BASE_URL;
    }
  }

  findAllWidgetsForTopics = (courseId, moduleId, lessonId, topicId) =>
    fetch
    (`https://das-saptaparna-assignment5-jav.herokuapp.com/api/student/topics/${topicId}/widgets`)
      .then(response => response.json())


}
