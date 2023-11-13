import React, { useState, useEffect } from 'react';
import Note from './Note';

function NoteList({onload}) {
  //console.log(onload);
  const noteslist = onload;
  
  /*useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(savedNotes);
  }, []);*/

  const deleteNote = (id) => {
    //const updatedNotes = noteslist.filter(note => noteslist.id !== id);
    //setNotesList(updatedNotes);
    //localStorage.setItem("notes", JSON.stringify(updatedNotes));
  };

  return (
    <div>
      {noteslist.map(note => (
        <Note key={note.id} id={note.id} title={note.title} content={note.content} onDelete={deleteNote} />
      ))}
    </div>
  );
}

export default NoteList;
