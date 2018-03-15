import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';
import { Note } from '../../../classes/note';
import { NoteServiceService } from '../../../services/note-service.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-notes-watch-header',
  templateUrl: './notes-watch-header.component.html',
  styleUrls: ['./notes-watch-header.component.css']
})
export class NotesWatchHeaderComponent implements OnInit {

  @Input() note: Note;
  @Output() clearOutNote = new EventEmitter();

  latestNoteKey: string;
  saveNote: boolean;
  currentKey: string;

  constructor(route: ActivatedRoute, private noteService: NoteServiceService, private location: Location) {
    route.params.subscribe(params => {
      if (params['id']) {
        this.currentKey = params['id'];
      }
    });
  }

  createNote() {
    this.latestNoteKey = this.noteService.createNo(this.note);

    this.saveNote = true;
  }

  updateNote() {
    this.noteService.updateNo(this.note, this.latestNoteKey);
  }

  deleteNote() {
    if (this.currentKey) {
      this.noteService.deleteNo(this.currentKey);
      this.location.back();
    } else if (this.saveNote) {
      this.noteService.deleteNo(this.latestNoteKey);
      this.clearOutNote.emit(null);
    } else {
      this.noteService.deleteNo(this.latestNoteKey);
      this.location.back();
    }
  }

  showCreate() {
    if (this.saveNote || this.currentKey) {
      return false;
    } else {
      return true;
    }
  }

  ngOnInit() {
  }

}
