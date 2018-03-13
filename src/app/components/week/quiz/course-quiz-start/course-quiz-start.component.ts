import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-quiz-start',
  templateUrl: './course-quiz-start.component.html',
  styleUrls: ['./course-quiz-start.component.css']
})
export class CourseQuizStartComponent implements OnInit {


  constructor(private router: Router) {
  }

  openLink() {
    console.log('hello');
    this.router.navigate(['/course/ielts101/week/quiz/s']);
  }

  ngOnInit() {
  }

}
