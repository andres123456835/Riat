import React, { useState, useEffect } from 'react';

function NoteBusador( { onChange,mynotes }) {
  //const [notes, setNotes] = useState([]);

  /*useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(savedNotes);
  }, []);*/

  const cambioTexto = (texto) => {
    //console.log("hola"+texto)
    //if(texto.length>=1){
      /*  const updatedNotes = mynotes.filter(note => note.title.startsWith(texto));  //hacer lo con usestate 
        if(updatedNotes==0){
          const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
          //setNotes(savedNotes);
          mynotes = savedNotes
        }else{
          //setNotes(updatedNotes);
          mynotes = updatedNotes
        }*/
        //localStorage.setItem("notes", JSON.stringify(updatedNotes));
        //onCreate();
        //console.log(updatedNotes);
        onChange(texto);

        
    }
    


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





