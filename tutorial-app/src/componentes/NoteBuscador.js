import React, { useState, useEffect } from 'react';

function NoteBusador( { onCreate }) {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(savedNotes);
  }, []);

  const cambioTexto = (texto) => {
    if(texto.length>=4){
        const updatedNotes = notes.filter(note => note.title == texto);
        setNotes(updatedNotes);
        localStorage.setItem("notes", JSON.stringify(updatedNotes));
        onCreate();
    }
    
  };

  return (
        <div>
            <h2>Aplicación de Notas</h2>
            <input type="text" placeholder="Buscador" 
                onChange={(e) => cambioTexto(e.target.value)} />
            <h3>Insertar Nota</h3>
        </div>
  );
}

export default NoteBusador;





