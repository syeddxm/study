import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(iconReg: MatIconRegistry, sanitizer: DomSanitizer) {
    iconReg.addSvgIcon('w_study', sanitizer.bypassSecurityTrustResourceUrl('./assets/icons/watch.svg'))
      .addSvgIcon('r_study', sanitizer.bypassSecurityTrustResourceUrl('./assets/icons/read.svg'))
      .addSvgIcon('q_study', sanitizer.bypassSecurityTrustResourceUrl('./assets/icons/quiz.svg'))
      .addSvgIcon('n_study', sanitizer.bypassSecurityTrustResourceUrl('./assets/icons/notes.svg'))
      .addSvgIcon('c_study', sanitizer.bypassSecurityTrustResourceUrl('./assets/icons/case.svg'))
      .addSvgIcon('g_study', sanitizer.bypassSecurityTrustResourceUrl('./assets/icons/glossary.svg'));
  }

}
