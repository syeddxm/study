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
      {name: 'Courses', icon: 'fa fa-graduation-cap', link: 'home/courses'},
      {name: 'Notifications', icon: 'far fa-bell', link: 'home/notifications'},
      {name: 'Browse', icon: 'fa fa-search', link: 'home/browse'},
      {name: 'Settings', icon: 'fa fa-cog', link: 'home/settings'}
    ];

    this.courseWeekMenuPages = [
      {name: 'Watch', disabled: false, link: 'watch', icon: 'fa fa-desktop'},
      {name: 'Read', disabled: true, link: 'read', icon: 'fa fa-book'},
      {name: 'Quiz', disabled: true, link: '', icon: 'fa fa-font'},
      {name: 'Notes', disabled: true, link: '', icon: 'far fa-sticky-note'},
      {name: 'Case Study', disabled: true, link: '', icon: 'fa fa-suitcase'},
      {name: 'Glossary', disabled: false, link: '', icon: 'far fa-file-alt'},
    ];
  }

  ngOnInit() {
  }

}
