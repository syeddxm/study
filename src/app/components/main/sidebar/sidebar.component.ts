import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../../material.module';
import { AuthService } from '../../../services/auth.service';

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

  constructor(public authService: AuthService) {
    this.firstName = 'Syed';
    this.lastName = 'Raza';
    this.userEmail = 'syed@dxm.to';
    this.menuPages = [
      {name: 'Courses', icon: 'school', link: '/courses'},
      {name: 'Notifications', icon: 'notifications_none', link: '/notifications'},
      {name: 'Browse', icon: 'search', link: '/browse'},
      {name: 'Settings', icon: 'settings', link: '/settings'}
    ];
  }

  logout() {
    this.authService.logout();
  }

  ngOnInit() {
  }

}
