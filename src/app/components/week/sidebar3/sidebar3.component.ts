import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar3',
  templateUrl: './sidebar3.component.html',
  styleUrls: ['./sidebar3.component.css']
})
export class Sidebar3Component implements OnInit {

  courseWeekMenuPages = [];

  menuPages = [];

  constructor() {
    this.menuPages = [
      {name: 'Courses', icon: 'school', link: '/courses'},
      {name: 'Notifications', icon: 'notifications_none', link: 'notifications'},
      {name: 'Browse', icon: 'search', link: '/browse'},
      {name: 'Settings', icon: 'settings', link: '/settings'}
    ];

    this.courseWeekMenuPages = [
      {name: 'Watch', link: 'watch', icon: 'w_study'},
      {name: 'Read', link: 'read', icon: 'r_study'},
      {name: 'Quiz',  link: 'quiz', icon: 'q_study'},
      {name: 'Notes', link: 'notes', icon: 'n_study'},
      {name: 'Case Study', link: 'case', icon: 'c_study'},
      {name: 'Glossary', link: 'glossary', icon: 'g_study'},
    ];

  }

  ngOnInit() {
  }

}
