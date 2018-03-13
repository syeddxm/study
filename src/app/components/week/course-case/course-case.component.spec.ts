import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseCaseComponent } from './course-case.component';

describe('CourseCaseComponent', () => {
  let component: CourseCaseComponent;
  let fixture: ComponentFixture<CourseCaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseCaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
