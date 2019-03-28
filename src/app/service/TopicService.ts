import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TopicService {

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

  findAllTopicsForLesson = (courseId, moduleId, lessonId) =>
    fetch
    (`https://das-saptaparna-assignment5-jav.herokuapp.com/api/student/lessons/${lessonId}/topics`)
      .then(response => response.json())

  findAllTopics = () =>
    fetch
    (`https://das-saptaparna-assignment5-jav.herokuapp.com/api/student/lessons`)
      .then(response => response.json())

  findTopicById = (topicId) =>
    fetch
    (`https://das-saptaparna-assignment5-jav.herokuapp.com/api/student/topics/${topicId}`)
      .then(response => response.json())

}
