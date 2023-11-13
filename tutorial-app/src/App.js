import React,{ useState, useEffect } from 'react';
import NoteList from './componentes/NoteList.js';
import NoteEditor from './componentes/NoteEditor.js';
import NoteBuscador from './componentes/NoteBuscador.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import  './componentes/Note.css';


function App() {

  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(savedNotes);
  }, []);

  const oncreate = () => {
    window.location.reload();
  };

  const onchange = (listanotes) => {
    console.log(listanotes);
    //console.log(listanotes.length);
    
    if(listanotes.length==0){
      const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
      setNotes(savedNotes);
    }else{
      setNotes(listanotes);
    }   
    
  };

  return (
    <div className="App" >
      
      <NoteBuscador onChange={onchange}/>
      <NoteEditor onCreate={oncreate}/>
      <NoteList onload={notes}/>
    </div>
  );
}

export default App;
