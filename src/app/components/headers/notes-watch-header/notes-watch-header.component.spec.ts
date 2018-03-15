import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesWatchHeaderComponent } from './notes-watch-header.component';

describe('NotesWatchHeaderComponent', () => {
  let component: NotesWatchHeaderComponent;
  let fixture: ComponentFixture<NotesWatchHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotesWatchHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesWatchHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
