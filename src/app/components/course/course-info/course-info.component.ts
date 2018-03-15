import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireStorage } from 'angularfire2/storage';

@Component({
  selector: 'app-course-info',
  templateUrl: './course-info.component.html',
  styleUrls: ['./course-info.component.css']
})
export class CourseInfoComponent implements OnInit {

  public course: object;

  videoUrl: Observable<string | null>;

  constructor(private storage: AngularFireStorage) {
    const ref = this.storage.ref('videos/intro-video.mp4');
    this.videoUrl = ref.getDownloadURL();

  }

  ngOnInit() {
  }

}
