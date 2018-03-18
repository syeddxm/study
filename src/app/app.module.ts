import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import {AppRoutingModule, RoutingComponents} from './app-routing.module';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
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
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { NoteServiceService } from './services/note-service.service';
import { CategoryUnavailableComponent } from './dialogs/category-unavailable/category-unavailable.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderBarComponent,
    RoutingComponents,
    CourseUnavailableComponent,
    SidebarComponent,
    CategoryUnavailableComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule
  ],
  exports: [
  ],
  providers: [ AuthService, AuthGuard, NoteServiceService ],
  bootstrap: [ AppComponent, ],
  entryComponents: [CourseUnavailableComponent, CategoryUnavailableComponent],
})
export class AppModule { }
