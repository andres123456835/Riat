import React, { useState, useRef } from 'react';

function NoteEditor(  { onCreate }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newNote = {
      id: Date.now(),
      title: title,
      content: content
    };

    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.push(newNote);
    localStorage.setItem("notes", JSON.stringify(notes));

    setTitle('');
    setContent('');
    inputRef.current.focus();

    onCreate();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Título de la nota"
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Contenido de la nota"
      />
      <button type="submit">Guardar Nota</button>
    </form>
  );
}

export default NoteEditor;
