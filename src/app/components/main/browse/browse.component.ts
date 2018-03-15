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
      },
      {
        title: 'Data Analytics',
        coursenumber: '13',
      },
      {
        title: 'Psychology',
        coursenumber: '27',
      },
      {
        title: 'User Research',
        coursenumber: '5',
      },
      {
        title: 'Statistics',
        coursenumber: '10',
      },
    ];

    this.courseList = [
      {
        title: 'Bus 151',
        subtitle: 'Introduction to psychology',
        instructors: ['Jane K.', 'Eric M.'],
        progress: 0,
        link: ''
      },
      {
        title: 'Econ 101',
        subtitle: 'Introduction to psychology',
        instructors: ['John M.'],
        progress: 0,
        link: ''
      },
      {
        title: 'Bus 151',
        subtitle: 'Introduction to psychology',
        instructors: ['Jane K.', 'Eric M.'],
        progress: 0,
        link: ''
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
