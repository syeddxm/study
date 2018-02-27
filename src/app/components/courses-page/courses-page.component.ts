import { Component, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';
import {CourseUnavailableComponent} from '../../dialogs/course-unavailable/course-unavailable.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.css'],
})
export class CoursesPageComponent implements OnInit {

  courseList = [];



  constructor(public dialog: MatDialog, private router: Router) {
    this.courseList = [
      {
        title: 'IELTS Reading 101',
        subtitle: 'Introduction to IELTS Reading',
        instructors: ['Megan Y'],
        progress: 40,
        link: 'course/ielts101',
      },
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

   openDialog(link: string) {

    if (link) {
      this.router.navigate([link]);
    } else {
      this.dialog.open(CourseUnavailableComponent);
    }
  }

  ngOnInit() {
  }

}
