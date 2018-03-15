import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import { AngularFireObject, AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { NoteServiceService } from '../../../../services/note-service.service';
import { Observable } from 'rxjs/Observable';
import { Note } from '../../../../classes/note';


@Component({
  selector: 'app-notes-editor',
  templateUrl: './notes-editor.component.html',
  styleUrls: ['./notes-editor.component.css']
})
export class NotesEditorComponent implements OnInit {

  maxRows = 30;

  constructor() {

  }

  ngOnInit() {
  }

}
