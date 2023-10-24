import React from 'react';

function ToDo({ task, index, deleteTask, toggleTask }) {
    return (
        <li style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            {task.title}
            <button onClick={() => toggleTask(index)}>Completar</button>
            <button onClick={() => deleteTask(index)}>❌</button>
        </li>
    );
}

export default ToDo;
