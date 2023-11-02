import React from 'react';
import NoteList from './componentes/NoteList.js';
import NoteEditor from './componentes/NoteEditor.js';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <h2>Aplicación de Notas</h2>
      <input type="text" placeholder="Buscador" />
      <h3>Insertar Nota</h3>
      <NoteEditor />
      <NoteList />
    </div>
  );
}

export default App;
