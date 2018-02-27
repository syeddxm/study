import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  courseList = [];

  constructor() {
    this.courseList = [
      {title: 'Psych 101', subtitle: 'Introduction to psychology', instructors: ['Jane K.'], progress: 40},
      {title: 'Bus 151', subtitle: 'Introduction to psychology', instructors: ['Jane K.', 'Eric M.'], progress: 0},
      {title: 'Econ 101', subtitle: 'Introduction to psychology', instructors: ['John M.'], progress: 0},
      {title: 'Bus 151', subtitle: 'Introduction to psychology', instructors: ['Jane K.', 'Eric M.'], progress: 0},
    ];
   }

  ngOnInit() {
  }

}
