import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseQuizStartComponent } from './course-quiz-start.component';

describe('CourseQuizStartComponent', () => {
  let component: CourseQuizStartComponent;
  let fixture: ComponentFixture<CourseQuizStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseQuizStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseQuizStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
