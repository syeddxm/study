import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseQuizEndComponent } from './course-quiz-end.component';

describe('CourseQuizEndComponent', () => {
  let component: CourseQuizEndComponent;
  let fixture: ComponentFixture<CourseQuizEndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseQuizEndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseQuizEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
