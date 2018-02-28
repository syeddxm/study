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
import { CourseInfoComponent } from './components/course/course-info/course-info.component';
import { Sidebar2Component } from './components/course/sidebar2/sidebar2.component';
import { Sidebar3Component } from './components/course/sidebar3/sidebar3.component';
import { CourseWeekComponent } from './components/week/course-week/course-week.component';
import { CourseWatchComponent } from './components/week/course-watch/course-watch.component';
import { CourseReadComponent } from './components/week/course-read/course-read.component';


const routes: Routes = [
  {path: '', redirectTo: 'home/courses', pathMatch: 'full'},
  {path: 'home', component: HomeComponent, data: { state: 'home' }, children: [
    {path: 'courses', component: CoursesPageComponent, data: { state: 'courses' }} ,
    {path: 'notifications', component: NotificationsComponent, data: { state: 'notifications' }}
  ]},
  {path: 'course/:id', component: CourseMainComponent, children: [
    {path: 'overview', component: CourseInfoComponent},
    ]
  },
  {path: 'course/:id/week', component: CourseWeekComponent, children: [
    {path: 'watch', component: CourseWatchComponent},
    {path: 'read', component: CourseReadComponent}
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    MaterialModule,
    CommonModule
  ],
  exports: [RouterModule, RouterLinkActive, Sidebar2Component, Sidebar3Component],
  declarations: [
    NotificationsComponent,
    CoursesPageComponent,
    TruncatePipe,
    CourseMainComponent,
    CourseInfoComponent,
    Sidebar2Component,
    CourseWeekComponent,
    CourseWatchComponent,
    Sidebar3Component,
    CourseReadComponent]
})
export class AppRoutingModule { }
export const RoutingComponents = [HomeComponent, LoginComponent];
