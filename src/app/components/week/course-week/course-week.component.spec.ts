import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseWeekComponent } from './course-week.component';

describe('CourseWeekComponent', () => {
  let component: CourseWeekComponent;
  let fixture: ComponentFixture<CourseWeekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseWeekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
