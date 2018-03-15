import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import { NoteServiceService } from '../../../../services/note-service.service';
import { Note } from '../../../../classes/note';

@Component({
  selector: 'app-notes-widget',
  templateUrl: './notes-widget.component.html',
  styleUrls: ['./notes-widget.component.css']
})
export class NotesWidgetComponent implements OnInit {


  note: Note = new Note();

  @Input() maxRows: number;

  rows = 10;

  constructor(route: ActivatedRoute, private noteService: NoteServiceService) {
    route.params.subscribe(params => {
      if (params['id']) {
        this.noteService.getNote(params['id']).subscribe( note => { this.note = note; });
      }
    });
  }

  clearOutNote() {
    this.note = new Note();
  }

  ngOnInit() {
    if (this.maxRows) {
      this.rows = this.maxRows;
    }
  }




}
