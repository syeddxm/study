import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar2',
  templateUrl: './sidebar2.component.html',
  styleUrls: ['./sidebar2.component.css']
})
export class Sidebar2Component implements OnInit {

  firstName: string;
  lastName: string;
  userEmail: string;
  menuPages = [];
  courseMenuPages = [];


  constructor() {
    this.firstName = 'Toluwa';
    this.lastName = 'Awodiya';
    this.userEmail = 'toluwaawodiya@gmail.com';
    this.menuPages = [
      {name: 'Courses', icon: 'school', link: '/courses'},
      {name: 'Notifications', icon: 'notifications_none', link: 'notifications'},
      {name: 'Browse', icon: 'search', link: '/browse'},
      {name: 'Settings', icon: 'settings', link: '/settings'}
    ];
    this.courseMenuPages = [
      {name: 'Overview', disabled: false, link: 'overview'},
      {name: 'Week 1', disabled: false, link: 'week/watch'},
      {name: 'Week 2', disabled: true, link: ''},
      {name: 'Week 3', disabled: true, link: ''},
      {name: 'Week 4', disabled: true, link: ''},
      {name: 'Week 5', disabled: true, link: ''},
      {name: 'Grades', disabled: false, link: ''},
      {name: 'Glossary', disabled: false, link: ''},
    ];
  }

  isDisabled(disabled: boolean) {
    return disabled;
  }
  ngOnInit() {
  }
}
