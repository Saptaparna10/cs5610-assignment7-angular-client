import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TopicService} from '../../service/TopicService';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {

  courseId;
  moduleId;
  lessonId;
  topicId;
  topics;

  constructor(private service: TopicService,
              private route: ActivatedRoute) {
    this.topics = [];
    this.route.params.subscribe(
      params => this.setParams(params));
  }

  setParams(params) {
    this.courseId = params.courseId;
    this.moduleId = params.moduleId;
    this.lessonId = params.lessonId;
    this.topicId = params.topicId;
    this.loadTopics();
  }

  loadTopics() {
    if (this.courseId !== undefined && this.moduleId !== undefined && this.lessonId !== undefined) {
      this.service.findAllTopicsForLesson(this.courseId, this.moduleId, this.lessonId)
        .then(topics => this.topics = topics);
    }
  }

  ngOnInit() {
    this.topics = [];
  }

}
