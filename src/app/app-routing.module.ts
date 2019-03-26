import { Routes, RouterModule } from '@angular/router';
import {CourseViewerComponent} from './component/course-viewer/course-viewer.component';
import {CourseGridComponent} from './component/course-grid/course-grid.component';


const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: CourseGridComponent},
  { path: 'course/:courseId', component: CourseViewerComponent },
  { path: 'course/:courseId/module/:moduleId', component: CourseViewerComponent },
  { path: 'course/:courseId/module/:moduleId/lesson/:lessonId', component: CourseViewerComponent },
  { path: 'course/:courseId/module/:moduleId/lesson/:lessonId/topic/:topicId', component: CourseViewerComponent },
  { path: '**', component: CourseGridComponent}
];
export const routing = RouterModule.forRoot(appRoutes);
