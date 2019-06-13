import React from "react";
import "./App.scss";
import { Provider } from "mobx-react";
import { noteStore } from "./store/NoteStore";
import { Notes } from "./components/Notes";
import { AddNoteForm } from "./components/AddNoteForm";

const App: React.FC = () => (
  <Provider noteStore={noteStore}>
    <>
      <AddNoteForm />
      <Notes />
    </>
  </Provider>
);

export default App;
