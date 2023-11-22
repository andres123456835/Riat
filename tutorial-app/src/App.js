import React,{ useState, useEffect } from 'react';
import NoteList from './componentes/NoteList.js';
import NoteEditor from './componentes/NoteEditor.js';
import NoteBuscador from './componentes/NoteBuscador.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import  './componentes/Note.css';


function App() {

  const [notes, setNotes] = useState([]);
  const [updatedNotes, setupdatedNotes] = useState([]);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(savedNotes);
  }, []);

  const oncreate = () => {
    window.location.reload();
  };



  const onchange = (texto) => {
    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(savedNotes);

    const update = notes.filter(note => note.title.startsWith(texto));

    if(update==0){
      //const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
      //setNotes(savedNotes);
    }else{
      setNotes(update);
      console.log(update);
      console.log(notes);
    }
    
    
  };

  return (
    <div className="App" >
      
      <NoteBuscador onChange={onchange} mynotes={notes}/>
      <NoteEditor onCreate={oncreate}/>
      <NoteList onload={notes}/>
    </div>
  );
}

export default App;
