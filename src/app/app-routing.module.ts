import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule, Routes, RouterLinkActive } from '@angular/router';
import { MaterialModule } from './material.module';
import { TruncatePipe } from './pipes/truncate.pipe';
import { AuthGuard } from './guards/auth.guard';

import { HomeComponent } from './components/main/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NotificationsComponent } from './components/main/notifications/notifications.component';
import { CoursesPageComponent } from './components/main/courses-page/courses-page.component';
import { CourseMainComponent } from './components/course/course-main/course-main.component';
import { CourseInfoComponent } from './components/course/course-info/course-info.component';
import { Sidebar2Component } from './components/course/sidebar2/sidebar2.component';
import { Sidebar3Component } from './components/week/sidebar3/sidebar3.component';
import { CourseWeekComponent } from './components/week/course-week/course-week.component';
import { CourseWatchComponent } from './components/week/course-watch/course-watch.component';
import { CourseReadComponent } from './components/week/course-read/course-read.component';
import { CourseQuizStartComponent } from './components/week/quiz/course-quiz-start/course-quiz-start.component';
import { CourseQuizComponent } from './components/week/quiz/course-quiz/course-quiz.component';
import { CourseQuizEndComponent } from './components/week/quiz/course-quiz-end/course-quiz-end.component';
import { ReadingHeaderComponent } from './components/headers/reading-header/reading-header.component';
import { CourseCaseComponent } from './components/week/course-case/course-case.component';
import { CourseGlossaryComponent } from './components/week/course-glossary/course-glossary.component';
import { SettingsComponent } from './components/main/settings/settings.component';
import { ProfileComponent } from './components/main/setting/profile/profile.component';
import { PasswordComponent } from './components/main/setting/password/password.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent },
  {path: '', component: HomeComponent,  canActivate: [AuthGuard], children: [
    {path: '', redirectTo: 'courses', pathMatch: 'full'},
    {path: 'courses', component: CoursesPageComponent},
    {path: 'notifications', component: NotificationsComponent},
    {path: 'settings', component: SettingsComponent, children: [
      {path: '', redirectTo: 'profile', pathMatch: 'full'},
      {path: 'profile', component: ProfileComponent},
      {path: 'password', component: PasswordComponent}
    ]},
  ]},
  {path: 'course/:id', component: CourseMainComponent,  canActivate: [AuthGuard], children: [
    {path: 'overview', component: CourseInfoComponent},
    ]
  },
  {path: 'course/:id/week', component: CourseWeekComponent,  canActivate: [AuthGuard], children: [
    {path: 'watch', component: CourseWatchComponent},
    {path: 'read', component: CourseReadComponent},
    {path: 'quiz', component: CourseQuizStartComponent},
    {path: 'quiz/s', component: CourseQuizComponent},
    {path: 'quiz/complete', component: CourseQuizEndComponent},
    {path: 'case', component: CourseCaseComponent},
    {path: 'glossary', component: CourseGlossaryComponent},
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    MaterialModule,
    CommonModule,
    FormsModule
  ],
  exports: [RouterModule, RouterLinkActive, Sidebar2Component, Sidebar3Component, ReadingHeaderComponent],
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
    CourseReadComponent,
    CourseQuizStartComponent,
    CourseQuizComponent,
    CourseQuizEndComponent,
    ReadingHeaderComponent,
    CourseCaseComponent,
    CourseGlossaryComponent,
    SettingsComponent,
    ProfileComponent,
    PasswordComponent]
})
export class AppRoutingModule { }
export const RoutingComponents = [HomeComponent, LoginComponent];
