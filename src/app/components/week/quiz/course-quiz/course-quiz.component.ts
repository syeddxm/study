import { Component, OnInit, } from '@angular/core';
import {MatRadioChange} from '@angular/material';
import { Router } from '@angular/router';


@Component({
  selector: 'app-course-quiz',
  templateUrl: './course-quiz.component.html',
  styleUrls: ['./course-quiz.component.css']
})
export class CourseQuizComponent implements OnInit {

  questions = [];
  answered: number;
  start: Date;
  now: Date;
  end: number;
  hours = 0;
  minutes = 30;
  seconds = 0;

  timeLeft: string;

  constructor(private router: Router) {
    this.answered = 0;
    this.end = + new Date() + 30 * 60000;

    this.questions = [
      {
        number: 1,
        type: '',
        q: 'What do you understand by skimming?',
        selected: 'not-selected',
        choices: [
          {ans: 'reading quickly to get a general idea of meaning'},
          {ans: 'reading in order to find specific information'},
          {ans: 'reading to find a word within a text'},
          {ans: 'none of the above'},
        ]
      },
      {
        number: 2,
        type: '',
        q: 'What is the meaning of scanning?',
        selected: 'not-selected',
        choices: [
          {ans: 'reading quickly to get a general idea of meaning'},
          {ans: 'reading in order to find specific information'},
          {ans: 'reading to find a word within a text'},
          {ans: 'none of the above'},
        ]
      },
      {
        number: 3,
        type: '',
        q: 'Choose the main idea for the paragraph',
        // tslint:disable-next-line:max-line-length
        qe: '\“Antimatter would be an attractive fuel source if it were not for the fact that it is extremely  difficult to store. Since the 1950s scientists have been grappling with this problem. If antimatter comes into contact with matter, that is any material, it results in an explosive reaction know as annihilation\”.',
        selected: 'not-selected',
        choices: [
          {ans: 'science of mental phenomena.'},
          {ans: 'science of conscious and unconscious activity.'},
          {ans: 'science of behavior.'},
          {ans: 'science of behavior and mental processes.'},
        ]
      },
      {
        number: 4,
        type: 'button-radio',
        // tslint:disable-next-line:max-line-length
        q: 'One of the following words matches the word in the red bar. You must find the word in the red bar from the list of words provided and click it as quickly as you can.',
        qe: 'population',
        selected: 'not-selected',
        choices: [
          {ans: '2000'},
          {ans: 'July'},
          {ans: 'affective'},
          {ans: 'Hunter'},
          {ans: '25%'},
          {ans: 'proof'},
          {ans: 'Atlantic'},
          {ans: 'trail'},
          {ans: 'hunger'},
          {ans: 'trial'},
          {ans: 'accomodate'},
          {ans: '20000'},
          {ans: 'whole'},
          {ans: 'economics'},
          {ans: 'intelligent'},
          {ans: 'popularity'},
          {ans: 'owning'},
          {ans: '21%'},
          {ans: 'population'},
          {ans: 'Hungary'},
        ]
      },
    ];


    setInterval(() => {
      this.decreaseTimer(this.end);
  }, 1000);
  }

  onChoiceChange($event: MatRadioChange, question): void {
    if (question.selected !== 'selected') {
      this.answered++;
    }
    question.selected = 'selected';
  }

  decreaseTimer(end) {

    this.now = new Date();

    const difference = end - (+ this.now);
    if (difference < 1000 ) {
      this.timeLeft = 'Out of Time';
    } else {
      const time = new Date( difference );
      const hours = time.getUTCHours();
      const mins = time.getUTCMinutes();
      const seconds = time.getUTCSeconds();

      this.timeLeft = hours + ':' + mins + ':' + seconds;
    }
  }


  ngOnInit() {
  }



  openLink() {
    this.router.navigate(['/course/ielts101/week/quiz/complete']);
  }


}
