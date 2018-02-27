import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, RouterLinkActive } from '@angular/router';
import { MaterialModule } from './material.module';
import { TruncatePipe } from './pipes/truncate.pipe';


import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { CoursesPageComponent } from './components/courses-page/courses-page.component';
import { CourseMainComponent } from './components/course/course-main/course-main.component';

const routes: Routes = [
  {path: '', component: CoursesPageComponent},
  {path: 'notifications', component: NotificationsComponent},
  {path: 'course/:id', component: CourseMainComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    MaterialModule,
    CommonModule
  ],
  exports: [RouterModule, RouterLinkActive],
  declarations: [NotificationsComponent, CoursesPageComponent, TruncatePipe, CourseMainComponent]
})
export class AppRoutingModule { }
export const RoutingComponents = [HomeComponent, LoginComponent];
