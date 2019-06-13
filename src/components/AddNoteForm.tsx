import React, { useState, useCallback } from "react";
import styled from "styled-components";
import { observer, inject } from "mobx-react";
import { NoteStore } from "../store/NoteStore";

export interface AddNoteFormProps {
  noteStore?: NoteStore;
}

export const AddNoteForm: React.FC<AddNoteFormProps> = inject("noteStore")(
  observer(({ noteStore }) => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const handleSubmit = useCallback(
      (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (noteStore !== undefined) {
          noteStore.addNote(title, body);
        } else {
          console.error("NoteStore is undefined");
        }
        setTitle("");
        setBody("");
      },
      [title, body, noteStore]
    );
    return (
      <FormWrapper onSubmit={handleSubmit}>
        <FormGroup>
          <InputLabel htmlFor="title">Title</InputLabel>
          <Input
            type="text"
            id="title"
            value={title}
            onChange={({ target: { value } }) => setTitle(value)}
          />
        </FormGroup>
        <FormGroup>
          <InputLabel htmlFor="body">Body</InputLabel>
          <Textarea
            cols={10}
            rows={10}
            id="body"
            value={body}
            onChange={({ target: { value } }) => setBody(value)}
          />
        </FormGroup>
        <FormGroup>
          <Button type="submit" disabled={title === "" || body === ""}>
            Add note
          </Button>
        </FormGroup>
      </FormWrapper>
    );
  })
);

const FormGroup = styled.div`
  :first-child {
    margin-top: 0px;
  }
  :last-child {
    margin-bottom: 0px;
  }
  width: 100%;
  min-height: 40px;
  display: flex;
  flex-direction: column;
  margin-top: 5px;
  margin-bottom: 5px;
`;

const InputLabel = styled.label`
  font-weight: bold;
  width: 100%;
  height: 20px;
`;
const Input = styled.input`
  width: 100%;
  height: 30px;
  font-size: 1.2em;
`;
const Textarea = styled.textarea`
  font-size: 1em;
`;

const FormWrapper = styled.form`
  margin: 10px;
  width: 200px;
`;

const Button = styled.button`
  height: 30px;
  font-size: 1.3em;
`;
