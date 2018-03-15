import { Component, OnInit } from '@angular/core';
import { Note } from '../../../../classes/note';
import { NoteServiceService } from '../../../../services/note-service.service';
import { AngularFireObject, AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';


@Component({
  selector: 'app-notes-page',
  templateUrl: './notes-page.component.html',
  styleUrls: ['./notes-page.component.css']
})
export class NotesPageComponent implements OnInit {

  notes: Observable<any[]> = null;

  constructor(private noteService: NoteServiceService, private router: Router) {
    this.notes = this.noteService.getNotes();
  }


  ngOnInit() {
  }



}
