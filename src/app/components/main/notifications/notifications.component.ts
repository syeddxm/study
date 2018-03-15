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
        title: 'Your feedback for Psychology 101 Quiz 1 is ready',
        subtitle: 'Welcome to Psychology 101, I am excited to start this journey with you.',
        days: '2 days ago',
      },
      {
        title: 'Welcome to Psychology 101',
        subtitle: 'Go to grades',
        days: '2 days ago',
        link: '/course/ielts/grades'
      },
    ];
  }

  ngOnInit() {
  }

}
