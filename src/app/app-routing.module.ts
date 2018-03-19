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
import { LoginPageComponent } from './components/login-page/login-page.component';
import { NotesWidgetComponent } from './components/week/notes/notes-widget/notes-widget.component';
import { NotesPageComponent } from './components/week/notes/notes-page/notes-page.component';
import { NotesWatchHeaderComponent } from './components/headers/notes-watch-header/notes-watch-header.component';
import { CoursesComponent } from './components/main/courses/courses.component';
import { NotesEditorComponent } from './components/week/notes/notes-editor/notes-editor.component';
import { BrowseComponent } from './components/main/browse/browse.component';
import { GradesComponent } from './components/course/grades/grades.component';
import { HeaderBarComponent } from './components/headers/header-bar/header-bar.component';
import { HeaderMainComponent } from './components/headers/header-main/header-main.component';


const routes: Routes = [
  {path: 'login', component: LoginPageComponent },
  {path: '', component: HomeComponent,  canActivate: [AuthGuard], children: [
    {path: '', redirectTo: 'courses', pathMatch: 'full'},
    {path: 'courses', component: CoursesComponent},
    {path: 'notifications', component: NotificationsComponent},
    {path: 'browse', component: BrowseComponent},
    {path: 'settings', component: SettingsComponent, children: [
      {path: '', redirectTo: 'profile', pathMatch: 'full'},
      {path: 'profile', component: ProfileComponent},
      {path: 'password', component: PasswordComponent}
    ]},
  ]},
  {path: 'course/:id', component: CourseMainComponent,  canActivate: [AuthGuard], children: [
    {path: 'overview', component: CourseInfoComponent},
    {path: 'glossary', component: CourseGlossaryComponent},
    {path: 'grades', component: GradesComponent},
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
    {path: 'notes', component: NotesPageComponent},
    {path: 'notes/editor/:id', component: NotesEditorComponent},
    {path: 'notes/new', component: NotesEditorComponent},
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
  exports: [
    RouterModule,
    RouterLinkActive,
    Sidebar2Component,
    Sidebar3Component,
    ReadingHeaderComponent,
  ],
  declarations: [
    NotificationsComponent,
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
    PasswordComponent,
    LoginPageComponent,
    LoginComponent,
    NotesWidgetComponent,
    NotesPageComponent,
    NotesWatchHeaderComponent,
    CoursesComponent,
    NotesEditorComponent,
    BrowseComponent,
    GradesComponent,
    HeaderBarComponent,
  ]
})
export class AppRoutingModule { }
export const RoutingComponents = [HomeComponent, HeaderMainComponent];
