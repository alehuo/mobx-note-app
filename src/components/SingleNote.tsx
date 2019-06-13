import React from "react";
import styled from "styled-components";
import { Note } from "../store/NoteStore";

const NoteWrapper = styled.div`
  background-color: #ede440;
  margin: 10px;
  height: 140px;
`;
const NoteTitle = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  align-content: center;
  align-items: center;
`;
const NoteBody = styled.div`
  width: 100%;
  height: calc(100% - 30px);
  padding: 5px;
  font-size: 1em;
  word-wrap: wrap;
  overflow-x: scroll;
`;
const NoteTitleText = styled.span`
  padding: 5px;
  font-size: 1.3em;
  font-weight: bold;
`;

export const SingleNote: React.FC<Note> = ({ title, body }) => (
  <NoteWrapper>
    <NoteTitle>
      <NoteTitleText>{title}</NoteTitleText>
    </NoteTitle>
    <NoteBody>{body}</NoteBody>
  </NoteWrapper>
);
