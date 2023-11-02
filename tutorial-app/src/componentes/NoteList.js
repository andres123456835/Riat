import React, { useState, useEffect } from 'react';
import Note from './Note';

function NoteList() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(savedNotes);
  }, []);

  const deleteNote = (id) => {
    const updatedNotes = notes.filter(note => note.id !== id);
    setNotes(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
  };

  return (
    <div>
      {notes.map(note => (
        <Note key={note.id} id={note.id} title={note.title} content={note.content} onDelete={deleteNote} />
      ))}
    </div>
  );
}

export default NoteList;
