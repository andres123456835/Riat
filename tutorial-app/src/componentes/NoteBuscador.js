import React, { useState, useEffect } from 'react';

function NoteBusador( { onCreate }) {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(savedNotes);
  }, []);

  const cambioTexto = (texto) => {
    if(texto.length>=1){
        const updatedNotes = notes.filter(note => note.title == texto);
        setNotes(updatedNotes);
        localStorage.setItem("notes", JSON.stringify(updatedNotes));
        onCreate();
    }
    
  };

  return (
        <div>
          <div className='row' class='titulo'>
            <h2>Aplicación de Notas</h2>
          </div>
          <div>
            <input className='row'class="buscador" type="text" placeholder="Buscador" onChange={(e) => cambioTexto(e.target.value)} />
            <div className='row' class='titulo'>
              <h3>Insertar Nota</h3>
            </div>  
          </div>
            
        </div>
  );
}

export default NoteBusador;





