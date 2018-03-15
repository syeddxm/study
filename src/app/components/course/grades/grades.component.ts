import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.css']
})
export class GradesComponent implements OnInit {

  weekGradeList = [];

  constructor() {
    this.weekGradeList = [
      {
        week: 1,
        title: 'Introduction to IELTS reading exam',
        days: 'Friday, September 29th',
        grade: 78,
      },
      {
        week: 2,
        title: 'Introduction to IELTS reading exam',
        days: 'Friday, October 6th ',
      },
      {
        week: 3,
        title: 'Introduction to IELTS reading exam',
        days: 'Friday, October 13th ',
      },
      {
        week: 4,
        title: 'Introduction to IELTS reading exam',
        days: 'Friday, October 13th ',
      },
      {
        week: 5,
        title: 'Final exam',
        days: 'Friday, October 13th ',
      },
    ];
  }

  ngOnInit() {
  }

}
