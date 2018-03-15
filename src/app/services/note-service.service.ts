import { Injectable } from '@angular/core';
import { AngularFireObject, AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Note } from '../classes/note';
import { Observable } from 'rxjs/observable';

@Injectable()
export class NoteServiceService {

  noteList: AngularFireList<Note>;
  noteObservable: Observable<any>;
  note: Observable<any>;


  constructor(private database: AngularFireDatabase) {
    this.noteList = this.database.list('notes');

    this.noteObservable = this.noteList.snapshotChanges().map(actions => {
      return actions.map(action => ({ key: action.key, ...action.payload.val() }));
    });

  }

  getNotes(): Observable<Note[]> {
    return this.noteObservable;
  }

  getNote(key: string) {
    return this.note = this.database.object<Note>('notes/' + key).valueChanges();

  }

  createNo(note: Note): string  {
    const notePostRef = this.noteList.push(note);

    const noteListObservable = this.noteList.snapshotChanges();
    noteListObservable.subscribe();
    return(notePostRef.key);
  }

  deleteNo(key: string) {
    this.database.object<Note>('notes/' + key).remove();
  }

  updateNo(note: Note, key: string): void {
    this.noteList.update(key, note);
  }

}
