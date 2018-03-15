import { Component, OnInit, AfterViewInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { AngularFireStorage } from 'angularfire2/storage';

declare var jwplayer: any;
declare var transcript: any;


@Component({
  selector: 'app-course-watch',
  templateUrl: './course-watch.component.html',
  styleUrls: ['./course-watch.component.css']
})
export class CourseWatchComponent implements AfterViewInit {

  videoUrl: Observable<string | null>;

  maxRows = 12;

  constructor(private storage: AngularFireStorage) {

  }


  ngAfterViewInit() {

    const chapters = [];
    const captions = [];
    let caption = -1;
    const query = '';

    const search = document.getElementById('search');

    const ref = this.storage.ref('videos/lecture-video.mp4');
    ref.getDownloadURL().subscribe(videourl => {
      jwplayer('player').setup({
        file: videourl,
        tracks: [
          { file: 'https://walsh9.github.io/videojs-transcript/captions/captions.en.vtt', kind: 'captions' }

        ],
        displaytitle: false,
        height: 400,
        autostart: false,
        playbackRateControls: [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2],
      });


    jwplayer().on('ready', function() {
      const r = new XMLHttpRequest();
      r.onreadystatechange = function() {
        if (r.readyState === 4 && r.status === 200) {
          const t = r.responseText.split('n\n');
          t.shift();
          for (let i = 0; i < t.length; i++) {
            const c = parse(t[i]);
            chapters.push(c);
          }
          loadCaptions();
        }
      };
      r.open('GET', 'assets/chapters.vtt', true);
      r.send();
    });
    function loadCaptions() {
      const r = new XMLHttpRequest();
      r.onreadystatechange = function() {
        if (r.readyState === 4 && r.status === 200) {
          const t = r.responseText.split('\n\n');
          t.shift();
          let h = '<p>';
          let s = 0;
          for (let i = 0; i < t.length; i++) {
            const c = parse(t[i]);
            if (s < chapters.length && c.begin > chapters[s].begin) {
              h += '</p><h4>' + chapters[s].text + '</h4><p>';
              s++;
            }

            let cleanTime: string;
            let cleanMinutes: string;

            const a = Math.floor(c.begin / 60);
            const b = Math.round(c.begin % 60);

            if (b < 10) {
              cleanMinutes = '0' + b;
            } else {
              cleanMinutes = '' +  b;
            }

            cleanTime = a + ':' + cleanMinutes;


            h += '<div class="transcript-text" id=\'caption' + i + '\'>';
            h += '<p class="col-3 timestamp">' + cleanTime + '</p><p class="col-9">' + c.text + '</p></div>';
            captions.push(c);
          }
          transcript.innerHTML = h + '</p>';
        }
      };
      r.open('GET', 'assets/captions.vtt', true);
      r.send();
    }
    function parse(d) {
        const a = d.split('\n');
        const i = a[1].indexOf(' --> ');
        let t = a[2];
        if (a[3]) {  t += ' ' + a[3]; }
        t = t.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        return {
          begin: seconds(a[1].substr(0, i)),
          btext: a[1].substr(3, i - 7),
          end: seconds(a[1].substr(i + 5)),
          text: t
        };
    }
    function seconds(s) {
      const a = s.split(':');
      let r = Number(a[a.length - 1]) + Number(a[a.length - 2]) * 60;
      if (a.length > 2) { r += Number(a[a.length - 3]) * 3600; }
      return r;
    }

    // Highlight current caption and chapter
    jwplayer().on('time', function(e) {
      const p = e.position;
      for (let j = 0; j < captions.length; j++) {
        if (captions[j].begin < p && captions[j].end > p) {
          if (j !== caption) {
            const c = document.getElementById('caption' + j);
            if (caption > -1) {
              document.getElementById('caption' + caption).className = '';
            }
            c.className = 'current';
            if (query === '') {
              transcript.scrollTop = c.offsetTop - transcript.offsetTop - 40;
            }
            caption = j;
          }
          break;
        }
      }
    });

  });


  }

}
