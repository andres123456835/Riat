import React from 'react';

function ListToDo({ tasks, removeTask, toggleCompletion }) {
    return (
        <ul className="list-group mt-3">
            {tasks.map((task, index) => (
                <li key={index} className={`list-group-item ${task.completed ? 'list-item-completed' : ''}`}>
                    <span onClick={() => toggleCompletion(index)}>{task.title}</span>
                    <button className="btn btn-danger btn-sm float-right" onClick={() => removeTask(index)}>X</button>
                </li>
            ))}
        </ul>
    );
}

export default ListToDo;
