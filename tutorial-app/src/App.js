import React from 'react';
import NoteList from './componentes/NoteList.js';
import NoteEditor from './componentes/NoteEditor.js';
import NoteBuscador from './componentes/NoteBuscador.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import  './componentes/Note.css';


function App() {

  const oncreate = () => {
    window.location.reload();
  };


  return (
    <div className="App" >
      
      <NoteBuscador onCreate={oncreate}/>
      <NoteEditor onCreate={oncreate}/>
      <NoteList />
    </div>
  );
}

export default App;
