import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-quiz-end',
  templateUrl: './course-quiz-end.component.html',
  styleUrls: ['./course-quiz-end.component.css']
})
export class CourseQuizEndComponent implements OnInit {

  constructor(private router: Router) { }

  openLink() {
    console.log('hello');
    this.router.navigate(['/course/ielts101/week/quiz/s']);
  }

  ngOnInit() {
  }

}
