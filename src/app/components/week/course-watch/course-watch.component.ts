import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var videojs: any;
declare var transcript: any;
declare var hell: any;

@Component({
  selector: 'app-course-watch',
  templateUrl: './course-watch.component.html',
  styleUrls: ['./course-watch.component.css']
})
export class CourseWatchComponent implements AfterViewInit {

  constructor() {

  }


  ngAfterViewInit() {
    const options = {};


    const player = videojs('course-video', options, function onPlayerReady() {
      videojs.log('Your player is ready!');

      // In this context, `this` is the player that was created by Video.js.
      this.play();

      const trans = this.transcript(options);


      // How about an event listener?
      this.on('ended', function() {
        videojs.log('Awww...over so soon?!');
      });
    });
  }

}
