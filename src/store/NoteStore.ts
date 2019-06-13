import { observable, action } from "mobx";

export interface Note {
  title: string;
  body: string;
  timestamp: number;
}

export class NoteStore {
  @observable
  public noteList: Note[] = [
    { title: "First one", body: "Hello", timestamp: 1560425062685 },
    { title: "Hello world", body: "Hello", timestamp: 1560425062687 }
  ];

  @action
  addNote(title: string, body: string) {
    this.noteList.push({ title, body, timestamp: +new Date() });
  }
}

export const noteStore = new NoteStore();
