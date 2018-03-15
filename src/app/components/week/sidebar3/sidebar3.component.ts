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
      {name: 'Courses', icon: 'fa fa-graduation-cap', link: '/courses'},
      {name: 'Notifications', icon: 'far fa-bell', link: '/notifications'},
      {name: 'Browse', icon: 'fa fa-search', link: '/browse'},
      {name: 'Settings', icon: 'fa fa-cog', link: '/settings'}
    ];

    this.courseWeekMenuPages = [
      {name: 'Watch', link: 'watch', icon: 'video_label'},
      {name: 'Read', link: 'read', icon: 'chrome_reader_mode'},
      {name: 'Quiz',  link: 'quiz', icon: 'assignment'},
      {name: 'Notes', link: 'notes', icon: 'insert_comment'},
      {name: 'Case Study', link: 'case', icon: 'subject'},
      {name: 'Glossary', link: 'glossary', icon: 'description'},
    ];
  }

  ngOnInit() {
  }

}
