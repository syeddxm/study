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

  constructor() {
    this.firstName = 'Toluwa';
    this.lastName = 'Awodiya';
    this.userEmail = 'toluwaawodiya@gmail.com';

  }

  ngOnInit() {
  }

}
