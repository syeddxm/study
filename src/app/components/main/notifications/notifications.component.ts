import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  notificationList = [];

  constructor() {
    this.notificationList = [
      {
        title: 'Welcome to IELTS 101',
        subtitle: 'Welcome to IELTS 101, I am excited to start this journey with you.',
        days: '2 days ago',
        instructorsimg: 'https://randomuser.me/api/portraits/men/20.jpg',
      },
      {
        title: 'Your feedback for IELTS 101 Quiz 1 is ready',
        subtitle: 'Go to grades',
        days: '2 days ago',
        link: '/course/ielts/grades',
        instructorsimg: 'https://randomuser.me/api/portraits/men/20.jpg',
      },
    ];
  }

  ngOnInit() {
  }

}
