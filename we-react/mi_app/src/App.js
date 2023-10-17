import logo from './logo.svg';
import './App.css';
import data from './data/data.json';
import TeamMember from './components/TeamMember';



function App() {
  return (
    <div className='App'>
        <div className='main-container'>
          <h1>Profesores internacionales de primer nivel</h1>
          {data.map((element, index) => (
          <TeamMember 
            name = {element.name}
            position = {element.position}
            description = {element.description}
            image = {element.image} />
          ))}
        </div>
    </div>
  );
}

export default App;