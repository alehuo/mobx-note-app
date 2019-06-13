import React from "react";
import { inject, observer } from "mobx-react";
import { SingleNote } from "./SingleNote";
import { NoteStore } from "../store/NoteStore";

interface NotesProps {
  noteStore?: NoteStore;
}

export const Notes = inject("noteStore")(
  observer<React.FC<NotesProps>>(({ noteStore }) => (
    <>
      {noteStore &&
        noteStore.noteList &&
        [
          ...noteStore.noteList.sort(
            (noteA, noteB) => noteB.timestamp - noteA.timestamp
          )
        ].map((note, idx) => (
          <SingleNote
            key={idx}
            title={note.title}
            body={note.body}
            timestamp={note.timestamp}
          />
        ))}
    </>
  ))
);
