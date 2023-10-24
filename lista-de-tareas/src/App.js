import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from './Logo';
import FormToDo from './FormToDo';
import ListToDo from './ListToDo';
import './App.css';

function App() {
    const [tasks, setTasks] = useState([]);

    const addTask = (task) => {
        setTasks(prevTasks => [...prevTasks, task]);
    };

    const removeTask = (index) => {
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);
    };

    const toggleCompletion = (index) => {
        const newTasks = [...tasks];
        newTasks[index].completed = !newTasks[index].completed;
        setTasks(newTasks);
    };

    const removeAllTasks = () => {
        setTasks([]);
    };

    return (
        <div className="container mt-5">
            <Logo />
            <h1>Mis Tareas</h1>
            <FormToDo addTask={addTask} />
            <ListToDo tasks={tasks} removeTask={removeTask} toggleCompletion={toggleCompletion} />
            {tasks.length > 0 && (
                <button className="btn btn-danger mt-3" onClick={removeAllTasks}>
                    Eliminar todas las tareas
                </button>
            )}
        </div>
    );
}

export default App;
