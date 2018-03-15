import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryUnavailableComponent } from './category-unavailable.component';

describe('CategoryUnavailableComponent', () => {
  let component: CategoryUnavailableComponent;
  let fixture: ComponentFixture<CategoryUnavailableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryUnavailableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryUnavailableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
