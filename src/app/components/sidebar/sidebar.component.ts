import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../material.module';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  firstName: string;
  lastName: string;
  userEmail: string;
  menuPages = [];

  constructor() {
    this.firstName = 'Toluwa';
    this.lastName = 'Awodiya';
    this.userEmail = 'toluwaawodiya@gmail.com';
    this.menuPages = [
      {name: 'Courses', icon: 'fa-graduation-cap'},
      {name: 'Notifications', icon: 'fa-bell'},
      {name: 'Browse', icon: 'fa-search'},
      {name: 'Settings', icon: 'fa-cog'}
    ];
  }

  ngOnInit() {
  }

}
