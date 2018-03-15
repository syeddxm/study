import { Component, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';
import {CourseUnavailableComponent} from '../../../dialogs/course-unavailable/course-unavailable.component';
import {CategoryUnavailableComponent} from '../../../dialogs/category-unavailable/category-unavailable.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {

  courseList = [];
  miniCards = [];

  constructor(public dialog: MatDialog, private router: Router) {
    this.miniCards = [
      {
        title: 'Business',
        coursenumber: '71',
        progress: 0,
        img: 'assets/icons/business_icon.png'
      },
      {
        title: 'Data Analytics',
        coursenumber: '13',
        img: 'assets/icons/analytics_icon.png'
      },
      {
        title: 'Psychology',
        coursenumber: '27',
        img: 'assets/icons/psychology_icon.png'
      },
      {
        title: 'User Research',
        coursenumber: '5',
        img: 'assets/icons/userresearch_icon.png'
      },
      {
        title: 'Statistics',
        coursenumber: '10',
        img: 'assets/icons/statistics_icon.png'
      },
    ];

    this.courseList = [
      {
        title: 'Bus 151',
        subtitle: 'Introduction to Business',
        instructors: ['Eric M.'],
        instructorsimg: 'https://randomuser.me/api/portraits/men/20.jpg',
        progress: 0,
        link: '',
        img: 'assets/images/bus151.jpg'
      },
      {
        title: 'Econ 101',
        subtitle: 'Introduction to Economics',
        instructors: ['John M.'],
        instructorsimg: 'https://randomuser.me/api/portraits/men/4.jpg',
        progress: 0,
        link: '',
        img: 'assets/images/econ101.png'
      },
      {
        title: 'Psych 151',
        subtitle: 'Introduction to Psychology',
        instructors: ['Jane K.'],
        instructorsimg: 'https://randomuser.me/api/portraits/women/0.jpg',
        progress: 0,
        link: '',
        img: 'assets/images/psych101.png'
      },
    ];


  }

  openDialog(type: string) {

    if (type === 'course' ) {
      this.dialog.open(CourseUnavailableComponent);
    } else if (type === 'category') {
      this.dialog.open(CategoryUnavailableComponent);
    }
  }

  ngOnInit() {
  }

}
