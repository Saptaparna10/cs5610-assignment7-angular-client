import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ModuleService} from '../../service/ModuleService';

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.css']
})
export class ModuleComponent implements OnInit {

  constructor(private service: ModuleService,
              private route: ActivatedRoute) {
    console.log('modules!!!!!')
    this.route.params.subscribe(
      params => this.setParams(params));
  }

  courseId;
  moduleId;
  modules = [];

  setParams(params) {
    this.courseId = params.courseId;
    this.moduleId = params.moduleId;
    this.loadModules(this.courseId);
  }

  loadModules(courseId) {
    this.courseId = courseId;
    this.service.findAllModulesForCourse(courseId)
      .then(modules => this.modules = modules);
  }

  ngOnInit() {
  }

}
