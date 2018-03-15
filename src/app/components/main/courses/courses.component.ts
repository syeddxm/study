import { Component, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';
import {CourseUnavailableComponent} from '../../../dialogs/course-unavailable/course-unavailable.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courseList = [];



  constructor(public dialog: MatDialog, private router: Router) {
    this.courseList = [
      {
        title: 'IELTS Reading 101',
        subtitle: 'Introduction to IELTS Reading',
        instructors: ['Megan Y'],
        instructorsimg: 'https://randomuser.me/api/portraits/women/23.jpg',
        progress: 40,
        link: 'course/ielts101/overview',
        img: 'assets/images/ielts101.png'
      },
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
