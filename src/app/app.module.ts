import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CourseGridComponent } from './component/course-grid/course-grid.component';
import { CourseService } from './service/CourseService';
import { CourseViewerComponent } from './component/course-viewer/course-viewer.component';
import { ModuleComponent } from './component/module/module.component';
import {routing} from './app-routing.module';
import { WhiteboardComponent } from './component/whiteboard/whiteboard.component';
import { LessonComponent } from './component/lesson/lesson.component';
import { TopicComponent } from './component/topic/topic.component';
import {ModuleService} from './service/ModuleService';
import {LessonService} from './service/LessonService';
import {TopicService} from './service/TopicService';
import { WidgetComponent } from './component/widget/widget.component';
import {WidgetService} from './service/WidgetService';


@NgModule({
  declarations: [
    AppComponent,
    CourseGridComponent,
    CourseViewerComponent,
    ModuleComponent,
    WhiteboardComponent,
    LessonComponent,
    TopicComponent,
    WidgetComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [CourseService, ModuleService, LessonService, TopicService, WidgetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
