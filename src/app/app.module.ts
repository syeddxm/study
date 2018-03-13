import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import {AppRoutingModule, RoutingComponents} from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderBarComponent } from './components/headers/header-bar/header-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SidebarComponent } from './components/main/sidebar/sidebar.component';
import { CourseUnavailableComponent } from './dialogs/course-unavailable/course-unavailable.component';


// firebase imports
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    HeaderBarComponent,
    RoutingComponents,
    CourseUnavailableComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
  ],
  exports: [
  ],
  providers: [ AuthService, AuthGuard ],
  bootstrap: [ AppComponent, ],
  entryComponents: [CourseUnavailableComponent],
})
export class AppModule { }
