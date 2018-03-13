import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseGlossaryComponent } from './course-glossary.component';

describe('CourseGlossaryComponent', () => {
  let component: CourseGlossaryComponent;
  let fixture: ComponentFixture<CourseGlossaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseGlossaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseGlossaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
