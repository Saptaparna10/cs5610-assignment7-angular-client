import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {WidgetService} from '../../service/WidgetService';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css']
})
export class WidgetComponent implements OnInit {

  constructor(private service: WidgetService,
              private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.setContext(params));
  }

  context;
  widgets = [];
  courseId;
  moduleId;
  lessonId;
  topicId;

  setContext(params) {
    this.context = params;
    this.loadWidgets(params.courseId, params.moduleId, params.lessonId, params.topicId);
  }

  // sortByWidgetOrder(array) {
  //   array.sort(function (p, q) {
  //     return p.orderOfWidget - q.orderOfWidget;
  //   });
  //
  //   return array;
  // }

  loadWidgets(courseId, moduleId, lessonId, topicId) {
    this.widgets = [];
    if (courseId !== undefined && moduleId !== undefined && lessonId !== undefined && topicId !== undefined) {
      this.service.findAllWidgetsForTopics(courseId, moduleId, lessonId, topicId).then(widgets => {
        if (widgets.length > 0) {
          this.widgets = widgets;
          console.log(widgets);
        }
      });
    }
  }

  ngOnInit() {
  }

}
