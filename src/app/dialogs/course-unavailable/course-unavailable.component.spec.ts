import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseUnavailableComponent } from './course-unavailable.component';

describe('CourseUnavailableComponent', () => {
  let component: CourseUnavailableComponent;
  let fixture: ComponentFixture<CourseUnavailableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseUnavailableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseUnavailableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
