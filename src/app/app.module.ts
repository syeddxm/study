import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import {AppRoutingModule, RoutingComponents} from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderBarComponent } from './components/header-bar/header-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CourseUnavailableComponent } from './dialogs/course-unavailable/course-unavailable.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderBarComponent,
    SidebarComponent,
    RoutingComponents,
    CourseUnavailableComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgbModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [ AppComponent, ],
  entryComponents: [CourseUnavailableComponent],
})
export class AppModule { }
