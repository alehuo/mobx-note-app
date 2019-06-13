import React from "react";
import "./App.scss";
import { Notes } from "./components/Notes";
import { AddNoteForm } from "./components/AddNoteForm";

const App: React.FC = () => (
    <>
      <AddNoteForm />
      <Notes />
    </>
);

export default App;
