import React from 'react';
import './Note.css';

function Note({ id, title, content, onDelete }) {
  return (
    <div className="Note">
      <h4>{title}</h4>
      <p>{content}</p>
      <button onClick={() => onDelete(id)}>Eliminar</button>
    </div>
  );
}

export default Note;
